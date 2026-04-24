import re

content = open('components/EthiopiaMap.tsx').read()

# Make all paths have the same premium coloring
path_regex = r'<path d="([^"]+)" fill="[^"]+" stroke="[^"]+" strokeWidth="[^"]+" className="[^"]+" onMouseEnter=\{[^}]+\} onMouseLeave=\{[^}]+\} />'

def replace_path(m):
    d = m.group(1)
    
    # We remove the hover entirely from paths to let it be static, or keep the hover 
    # but with a unified color.
    # A premium golden brown: 
    return f'<path d="{d}" fill="rgba(212, 175, 55, 0.02)" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="0.15" className="transition-all duration-700 hover:fill-[rgba(212,175,55,0.08)] hover:stroke-[rgba(212,175,55,0.5)]" />'

new_paths = re.sub(path_regex, replace_path, content)

# Remove the injected text labels inside SVG that start with <text
new_paths = re.sub(r'\s*<text x="[^"]+" y="[^"]+" fill="[^"]+" fontSize="[^"]+" textAnchor="middle" alignmentBaseline="middle" className="[^"]+" transform="[^"]+">\s*<tspan>[^<]+</tspan>\s*</text>\s*', '', new_paths)
new_paths = re.sub(r'\s*<text.*?<\/text>\s*', '', new_paths, flags=re.DOTALL) # Fallback to clear all texts

# Change foreignObject x/y to be SVG coordinates directly, rather than % 
# Currently they are: x={`${region.x}%`} y={`${region.y}%`}
# They should just be x={region.x} y={region.y} width={...} height={...}
new_paths = new_paths.replace('x={`${region.x}%`}', 'x={region.x - 2.5}')
new_paths = new_paths.replace('y={`${region.y}%`}', 'y={region.y - 2.5}')
new_paths = new_paths.replace('width="5%"', 'width="5"')
new_paths = new_paths.replace('height="5%"', 'height="5"')
new_paths = new_paths.replace('className="overflow-visible"', 'className="overflow-visible" style={{ position: "absolute", overflow: "visible" }}')

# We'll write to a temp file and check
with open('/tmp/test_map.tsx', 'w') as f:
    f.write(new_paths)

