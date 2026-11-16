"""Build the RPG shell and a standalone offline HTML; GAME_DB stays external in the repository."""
from pathlib import Path
import re
root=Path(__file__).parent
html=(root/'rpg-shell.html').read_text()
for token,name in {'__CSS__':'rpg.css','__ENGINE__':'rpg-engine.js','__RENDERER__':'rpg-renderer.js','__AUDIO__':'rpg-audio.js','__ONLINE__':'rpg-online.js','__UI__':'rpg-ui.js'}.items():
    html=html.replace(token,(root/name).read_text())
assert not re.search(r'__[A-Z_]+__',html)
(root/'index.html').write_text(html)
standalone=html.replace('<script id="game-db" src="./game-db.js"></script>','<script id="game-db">\n'+(root/'game-db.js').read_text()+'</script>')
(root.parent/'에버돈_RPG.html').write_text(standalone)
print('Built index.html + game-db.js and /workspace/에버돈_RPG.html')
