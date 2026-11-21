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

---

# Episódio 2 — imagens novas (7)

Gere na ordem, suba **só a versão escolhida** de cada uma na pasta `imagens/`, sem precisar renomear.

### 1. Ficha do Tetsu
```
Character design sheet of an original anime mentor: Tetsu, a 62-year-old Japanese-Brazilian blacksmith. Short gray buzz-cut hair, thick gray eyebrows, deep wrinkles, stern narrow dark eyes, short gray stubble beard. Broad shoulders and strong muscular forearms covered in old burn scars. Wearing a dark brown leather blacksmith apron over a faded charcoal work shirt with rolled-up sleeves, a rag hanging from the apron pocket, heavy boots. Holding a blacksmith hammer. Gruff, serious, but trustworthy presence. Front view full body and a waist-up close-up side by side. Modern Japanese TV anime style, cinematic key visual quality, clean sharp line art, cel shading with soft gradients, dramatic warm orange rim lighting from a forge, muted desaturated palette with gray fog tones and warm orange accents. Plain solid bright green background (#00FF00), no text.
```

Para as imagens 2, 3 e 4, **anexe a ficha do Tetsu** e comece com: `Using the attached character as exact reference (same face, hair, scars, apron),`

### 2. Tetsu sério
```
waist-up portrait, serious stern expression, arms crossed, looking straight at the viewer, warm forge rim light. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
### 3. Tetsu bravo
```
waist-up portrait, angry intense expression, furrowed brows, clenched jaw, gripping the hammer tightly, shadow over his eyes, red-orange rim light. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```
### 4. Tetsu aprovando
```
waist-up portrait, subtle approving expression, a very small half-smile, relaxed eyes, hammer resting on his shoulder, warm soft light. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```

### 5. Príncipe no esforço (anexe a **ficha do Príncipe**)
```
Using the attached character as exact reference (same face, hair, hoodie), waist-up portrait, exhausted but persistent expression, sweat dripping, gritted teeth, hoodie sleeves rolled up, holding a heavy blacksmith hammer with both hands, warm orange forge light on his face. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```

### 6. Cenário: portão do depósito
```
Exterior of a big old logistics warehouse at noon, a large rusty iron sliding gate with broken hinges, concrete yard, a few parked trucks, gray foggy sky, dull midday light, gloomy Brazilian industrial neighborhood. Modern Japanese TV anime background art, painterly cinematic lighting, highly detailed, no people, no text, vertical 9:16.
```

### 7. Cenário: a forja
```
Interior of an old traditional blacksmith forge at 5 a.m., glowing furnace with burning embers, a heavy anvil in the center with a red-hot iron bar on it, hammers and tongs hanging on brick walls, sparks floating in the air, dark blue dawn light from a small window contrasting with warm orange fire light. Modern Japanese TV anime background art, painterly cinematic lighting, highly detailed, no people, no text, vertical 9:16.
```

---

# Correções e extras

### 3 (de novo). Tetsu bravo — sem chapéu
Anexe a **ficha do Tetsu**.
```
Using the attached character as exact reference (same bald gray buzz-cut head with NO hat, same face, scars and leather apron), waist-up portrait, angry intense expression, furrowed brows, clenched jaw, eyes clearly visible and glaring at the viewer, gripping the hammer tightly, red-orange rim light from a forge. Do not add any hat, mask or accessory. Modern Japanese TV anime style, clean line art, cel shading. Plain solid bright green background (#00FF00), no text, vertical 3:4.
```

### 8. Príncipe em miniatura 3D para o mapa (opcional)
Anexe a **ficha do Príncipe**.
```
Using the attached character as exact reference (same hair, hoodie, lanyard), a cute chibi 3D figurine of him, like a small vinyl collectible toy, full body standing in a walking pose seen from a three-quarter front angle, big head and small body, soft studio lighting with gentle shadows, smooth 3D render. Plain solid bright green background (#00FF00), no ground shadow, no text, vertical 3:4.
```
