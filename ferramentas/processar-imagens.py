"""Converte as imagens originais (imagens/originais/<nome>.jpg) para o jogo (imagens/jogo/<nome>.webp).

- cena-*: cenário, redimensionado para no máximo 1600px.
- *-ficha: ignorado (só referência para gerar as expressões).
- resto: personagem com fundo verde, que vira transparente (900x1200).

Uso: python3 ferramentas/processar-imagens.py [nome1 nome2 ...]   (sem nomes processa tudo)
"""
import glob
import os
import sys

import numpy as np
from PIL import Image

ORIG = "imagens/originais/"
JOGO = "imagens/jogo/"


def recortar_verde(im):
    a = np.asarray(im.convert("RGB")).astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    verde = g - np.maximum(r, b)
    alpha = np.clip(1 - (verde - 25) / (90 - 25), 0, 1)
    g2 = np.where(verde > 0, np.minimum(g, np.maximum(r, b) + verde * alpha * 0.15), g)
    out = np.dstack([r, g2, b, alpha * 255]).clip(0, 255).astype(np.uint8)
    return Image.fromarray(out, "RGBA")


def processar(nome):
    im = Image.open(ORIG + nome + ".jpg")
    if nome.endswith("-ficha"):
        return None
    if nome.endswith("-mapa"):
        # miniatura para o mapa: recorta justo no boneco
        o = recortar_verde(im)
        o = o.crop(o.getchannel("A").point(lambda v: 255 if v > 40 else 0).getbbox())
        o.thumbnail((400, 400), Image.LANCZOS)
        o.save(JOGO + nome + ".webp", "WEBP", quality=85, method=6)
    elif nome.startswith("cena-"):
        im = im.convert("RGB")
        im.thumbnail((1600, 1600), Image.LANCZOS)
        im.save(JOGO + nome + ".webp", "WEBP", quality=78, method=6)
    else:
        o = recortar_verde(im)
        w, h = o.size
        # enquadra em 3:4 pelo topo, para manter o rosto
        if w / h > 0.75:
            nw = int(h * 0.75)
            o = o.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
        else:
            o = o.crop((0, 0, w, int(w / 0.75)))
        o.resize((900, 1200), Image.LANCZOS).save(JOGO + nome + ".webp", "WEBP", quality=82, method=6)
    return os.path.getsize(JOGO + nome + ".webp") // 1024


if __name__ == "__main__":
    os.makedirs(JOGO, exist_ok=True)
    nomes = sys.argv[1:] or [os.path.basename(f)[:-4] for f in sorted(glob.glob(ORIG + "*.jpg"))]
    for n in nomes:
        kb = processar(n)
        if kb is not None:
            print(f"{n}: {kb} KB")
