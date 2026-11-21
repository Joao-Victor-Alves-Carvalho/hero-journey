"""Marca uma nova versão do app. Rode antes de cada commit que muda o jogo.

Atualiza window.VERSAO_APP e o ?v= dos scripts no index.html, e o versao.json.
Assim o app no iPhone percebe a versão nova ao abrir e recarrega sozinho.
"""
import datetime
import json
import re

v = datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%d-%H%M%S")
s = open("index.html", encoding="utf-8").read()
s = re.sub(r'window\.VERSAO_APP = "[^"]*";', f'window.VERSAO_APP = "{v}";', s)
s = re.sub(r'(conteudo/episodios\.js)\?v=[^"]*"', rf'\1?v={v}"', s)
open("index.html", "w", encoding="utf-8").write(s)
json.dump({"v": v}, open("versao.json", "w"))
print("versão", v)
