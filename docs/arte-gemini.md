# Arte da Temporada 1 — prompts para o Gemini

## Como gerar (leia antes)
1. **Primeiro, a ficha de cada personagem** (prompt "Ficha"). Escolha a melhor imagem.
2. **Depois, as expressões:** anexe a ficha escolhida no Gemini e use os prompts de expressão. Isso mantém o mesmo rosto.
3. **Fundo verde liso** nos personagens: o Gemini não gera fundo transparente, então eu removo o verde depois.
4. **Proporção:** personagens em **3:4 (vertical)**, cenários em **9:16 (vertical)**. Se o Gemini não respeitar, escreva no fim: "vertical image, 3:4 aspect ratio".
5. **Nomeie os arquivos** exatamente como indicado (ex.: `principe-neutro.png`).
6. **Envie as imagens** para o GitHub: no repositório, troque para o branch `claude/hopeful-newton-9nffbz`, entre na pasta `imagens/` (ou crie digitando `imagens/` no nome), clique em **Add file → Upload files** e faça **Commit**.

## Bloco de estilo (já incluído em todos os prompts)
`Modern Japanese TV anime style, cinematic key visual quality, clean sharp line art, cel shading with soft gradients, dramatic rim lighting, muted desaturated palette with gray fog tones and warm orange accents.`

---

## 1. Príncipe

### Ficha → `principe-ficha.png`
```
Character design sheet of an original anime protagonist: a 24-year-old Brazilian young man named Príncipe. Light brown skin, messy spiky dark navy-black hair with a few strands falling over the forehead, expressive dark brown eyes with tired eye bags but a spark of determination, slim athletic build. Wearing a worn dark indigo hoodie with orange drawstrings, black cargo pants, simple sneakers, and a warehouse employee ID badge on a lanyard. Front view full body and a waist-up close-up side by side. Modern Japanese TV anime style, cinematic key visual quality, clean sharp line art, cel shading with soft gradients, dramatic rim lighting, muted desaturated palette with gray fog tones and warm orange accents. Plain solid bright green background (#00FF00), no text.
```

### Expressões (anexe a ficha)
Comece cada prompt com: `Using the attached character as exact reference (same face, hair, clothes),`

- `principe-neutro.png`
```
waist-up portrait facing slightly to the left, calm neutral expression, a little tired, looking at the viewer. Modern Japanese TV anime style, clean line art, cel shading, soft rim light. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
- `principe-cansado.png`
```
waist-up portrait, exhausted expression, heavy eyelids, slightly slouched shoulders, hand rubbing the back of his neck. Modern Japanese TV anime style, clean line art, cel shading, soft rim light. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
- `principe-determinado.png`
```
waist-up portrait, determined expression, furrowed brows, clenched fist raised near his chest, eyes shining with resolve, warm orange rim light. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
- `principe-abalado.png`
```
waist-up portrait, shaken and surprised expression, wide eyes, mouth slightly open, a drop of sweat on the temple. Modern Japanese TV anime style, clean line art, cel shading, cold blue rim light. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```

---

## 2. Léo

### Ficha → `leo-ficha.png`
```
Character design sheet of an original anime side character: Léo, a 40-year-old Brazilian warehouse worker. Medium brown skin, short graying hair under a faded dark cap, light stubble, tired posture. His eyes are dull and gray with no highlights, as if the color was drained from him. Wearing a faded gray work vest over a long-sleeve shirt, work gloves tucked in the pocket. His whole color palette is slightly washed out and grayish compared to a normal person. Front view full body and a waist-up close-up side by side. Modern Japanese TV anime style, cinematic key visual quality, clean sharp line art, cel shading with soft gradients, muted desaturated palette with gray fog tones. Plain solid bright green background (#00FF00), no text.
```

### Expressões (anexe a ficha)
- `leo-apatico.png`
```
Using the attached character as exact reference (same face, cap, clothes), waist-up portrait, apathetic flat expression, half-closed dull gray eyes, looking slightly away. Modern Japanese TV anime style, clean line art, cel shading, desaturated colors. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
- `leo-triste.png`
```
Using the attached character as exact reference (same face, cap, clothes), waist-up portrait, quiet sad expression, a faint bitter half-smile, looking down, as if remembering something he lost. Modern Japanese TV anime style, clean line art, cel shading, desaturated colors. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```

---

## 3. Senhor Amanhã
Ele é o conforto: **charmoso, gentil, nada assustador**. O perigo está no quanto ele é agradável.

### Ficha → `amanha-ficha.png`
```
Character design sheet of an original anime antagonist who looks friendly and charming: Senhor Amanhã, an elegant tall gentleman of indeterminate age. Wearing a long soft gray overcoat over a vest, a wide-brim gray hat whose shadow hides his eyes, leaving only a warm, kind, gentle smile visible. Holds an antique golden pocket watch whose hands are stopped. Thin wisps of soft gray mist drift around his coat. Relaxed, welcoming body language, like a gracious host. Not scary, cozy and inviting. Front view full body and a waist-up close-up side by side. Modern Japanese TV anime style, cinematic key visual quality, clean sharp line art, cel shading with soft gradients, muted palette of grays with soft gold accents. Plain solid bright green background (#00FF00), no text.
```

### Expressões (anexe a ficha)
- `amanha-gentil.png`
```
Using the attached character as exact reference (same hat, coat, pocket watch, eyes hidden by hat shadow), waist-up portrait, warm gentle smile, one hand open in an inviting gesture, soft gray mist around him. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
- `amanha-convencido.png`
```
Using the attached character as exact reference (same hat, coat, pocket watch, eyes hidden by hat shadow), waist-up portrait, confident knowing smirk, holding the stopped golden pocket watch up near his face, slightly tilted head. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```

---

## 4. Cenários (sem personagens, 9:16)
Termine todos com: `Modern Japanese TV anime background art, painterly cinematic lighting, highly detailed, no people, no text, vertical 9:16.`

- `cena-vale.png`
```
Wide view of a gloomy Brazilian working-class city at dawn called Vale Cinza, small houses, tangled power lines, and apartment blocks covered by thick soft gray fog, a faint orange glow of sunrise trying to break through the clouds.
```
- `cena-quarto.png`
```
Small simple bedroom of a young working man at 5:59 a.m., blue predawn light through the window blinds, unmade bed, phone glowing on the nightstand with an alarm, a notebook in a half-open drawer, faint gray mist near the window.
```
- `cena-deposito.png`
```
Interior of a large dull logistics warehouse in the morning, tall metal shelves with cardboard boxes, a work counter with label printers, cold fluorescent lights, gray dusty atmosphere.
```
- `cena-sala.png`
```
Small cozy living room of a modest apartment at 7 p.m., a very inviting soft couch with a blanket, TV turned on with a soft glow, warm lamp light, a desk with a closed notebook in the corner.
```
- `cena-noite.png`
```
The same small bedroom at 11 p.m., lights off, moonlight through the window, soft gray mist slowly entering through the gap of the window, quiet and mysterious atmosphere.
```
