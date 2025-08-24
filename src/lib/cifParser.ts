import { CrystalData } from './crystalData'

interface CIFAtom {
  label: string
  type_symbol: string
  fract_x: number
  fract_y: number
  fract_z: number
}

interface CIFCell {
  length_a: number
  length_b: number
  length_c: number
  angle_alpha: number
  angle_beta: number
  angle_gamma: number
}

const elementColors: { [key: string]: string } = {
  'H': '#FFFFFF',
  'C': '#404040',
  'N': '#0000FF',
  'O': '#FF0000',
  'F': '#00FF00',
  'Na': '#9C27B0',
  'Mg': '#228B22',
  'Al': '#808080',
  'Si': '#808080',
  'P': '#FFA500',
  'S': '#FFFF00',
  'Cl': '#4CAF50',
  'K': '#9C27B0',
  'Ca': '#808080',
  'Fe': '#FFA500',
  'Cu': '#FFA500',
  'Zn': '#808080',
  'Br': '#8B4513',
  'Ag': '#C0C0C0',
  'I': '#9400D3',
  'Au': '#FFD700',
  'default': '#808080'
}

const elementRadii: { [key: string]: number } = {
  'H': 0.25,
  'C': 0.4,
  'N': 0.35,
  'O': 0.35,
  'F': 0.3,
  'Na': 0.5,
  'Mg': 0.45,
  'Al': 0.5,
  'Si': 0.5,
  'P': 0.5,
  'S': 0.5,
  'Cl': 0.5,
  'K': 0.6,
  'Ca': 0.55,
  'Fe': 0.55,
  'Cu': 0.5,
  'Zn': 0.5,
  'Br': 0.55,
  'Ag': 0.6,
  'I': 0.6,
  'Au': 0.6,
  'default': 0.5
}

export function parseCIF(cifContent: string): CrystalData {
  const lines = cifContent.split('\n')
  const atoms: CIFAtom[] = []
  const cell: CIFCell = {
    length_a: 1,
    length_b: 1,
    length_c: 1,
    angle_alpha: 90,
    angle_beta: 90,
    angle_gamma: 90
  }
  
  let inAtomLoop = false
  let atomColumns: string[] = []
  let name = 'Crystal Structure'
  let formula = ''
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Extract structure name
    if (line.startsWith('_chemical_name_common') || line.startsWith('_chemical_name_mineral')) {
      const match = line.match(/['"](.+)['"]/)
      if (match) name = match[1]
    }
    
    // Extract chemical formula
    if (line.startsWith('_chemical_formula_sum')) {
      const match = line.match(/['"](.+)['"]/)
      if (match) formula = match[1].replace(/\s+/g, '')
    }
    
    // Extract cell parameters
    if (line.startsWith('_cell_length_a')) {
      const value = parseFloat(line.split(/\s+/)[1])
      if (!isNaN(value)) cell.length_a = value
    }
    if (line.startsWith('_cell_length_b')) {
      const value = parseFloat(line.split(/\s+/)[1])
      if (!isNaN(value)) cell.length_b = value
    }
    if (line.startsWith('_cell_length_c')) {
      const value = parseFloat(line.split(/\s+/)[1])
      if (!isNaN(value)) cell.length_c = value
    }
    if (line.startsWith('_cell_angle_alpha')) {
      const value = parseFloat(line.split(/\s+/)[1])
      if (!isNaN(value)) cell.angle_alpha = value
    }
    if (line.startsWith('_cell_angle_beta')) {
      const value = parseFloat(line.split(/\s+/)[1])
      if (!isNaN(value)) cell.angle_beta = value
    }
    if (line.startsWith('_cell_angle_gamma')) {
      const value = parseFloat(line.split(/\s+/)[1])
      if (!isNaN(value)) cell.angle_gamma = value
    }
    
    // Detect atom site loop
    if (line === 'loop_') {
      // Check if this is an atom site loop
      let j = i + 1
      while (j < lines.length && lines[j].trim().startsWith('_atom_site_')) {
        j++
      }
      if (j > i + 1) {
        inAtomLoop = true
        atomColumns = []
        for (let k = i + 1; k < j; k++) {
          atomColumns.push(lines[k].trim())
        }
        i = j - 1
      }
    } else if (inAtomLoop && !line.startsWith('_') && line !== '' && !line.startsWith('loop_')) {
      // Parse atom data
      const parts = line.split(/\s+/)
      if (parts.length >= atomColumns.length) {
        const atom: any = {}
        atomColumns.forEach((col, idx) => {
          const colName = col.replace('_atom_site_', '')
          atom[colName] = parts[idx]
        })
        
        // Extract required fields
        const cifAtom: CIFAtom = {
          label: atom.label || '',
          type_symbol: atom.type_symbol || atom.label?.replace(/[0-9]/g, '') || '',
          fract_x: parseFloat(atom.fract_x) || 0,
          fract_y: parseFloat(atom.fract_y) || 0,
          fract_z: parseFloat(atom.fract_z) || 0
        }
        atoms.push(cifAtom)
      }
    } else if (inAtomLoop && (line.startsWith('loop_') || line.startsWith('#'))) {
      inAtomLoop = false
    }
  }
  
  // Convert fractional coordinates to Cartesian coordinates
  const cartesianAtoms = atoms.map(atom => {
    const x = atom.fract_x * cell.length_a
    const y = atom.fract_y * cell.length_b
    const z = atom.fract_z * cell.length_c
    
    const element = atom.type_symbol.replace(/[0-9+-]/g, '')
    const color = elementColors[element] || elementColors.default
    const radius = elementRadii[element] || elementRadii.default
    
    return {
      position: [x - cell.length_a/2, y - cell.length_b/2, z - cell.length_c/2] as [number, number, number],
      color,
      radius,
      element
    }
  })
  
  // Generate bonds based on distance
  const bonds: Array<{start: [number, number, number], end: [number, number, number], color?: string}> = []
  const maxBondLength = 2.5 // Typical max bond length in Angstroms
  
  for (let i = 0; i < cartesianAtoms.length; i++) {
    for (let j = i + 1; j < cartesianAtoms.length; j++) {
      const atom1 = cartesianAtoms[i]
      const atom2 = cartesianAtoms[j]
      
      // Calculate distance considering periodic boundary conditions
      const dx = atom2.position[0] - atom1.position[0]
      const dy = atom2.position[1] - atom1.position[1]
      const dz = atom2.position[2] - atom1.position[2]
      const distance = Math.sqrt(dx*dx + dy*dy + dz*dz)
      
      // Check if atoms are bonded
      const minBondLength = (atom1.radius + atom2.radius) * 0.8
      const adjustedMaxBondLength = (atom1.radius + atom2.radius) * 2.5
      
      if (distance > minBondLength && distance < Math.min(maxBondLength, adjustedMaxBondLength)) {
        bonds.push({
          start: atom1.position,
          end: atom2.position,
          color: '#888888'
        })
      }
    }
  }
  
  return {
    name: name || 'CIF Structure',
    formula: formula || 'Unknown',
    description: `Unit cell: a=${cell.length_a.toFixed(2)}Å, b=${cell.length_b.toFixed(2)}Å, c=${cell.length_c.toFixed(2)}Å`,
    atoms: cartesianAtoms,
    bonds
  }
}

export function generateSupercell(
  crystalData: CrystalData, 
  cell: CIFCell,
  nx: number = 1, 
  ny: number = 1, 
  nz: number = 1
): CrystalData {
  const superAtoms = []
  const superBonds = []
  
  // Generate supercell atoms
  for (let ix = 0; ix < nx; ix++) {
    for (let iy = 0; iy < ny; iy++) {
      for (let iz = 0; iz < nz; iz++) {
        for (const atom of crystalData.atoms) {
          superAtoms.push({
            ...atom,
            position: [
              atom.position[0] + ix * cell.length_a,
              atom.position[1] + iy * cell.length_b,
              atom.position[2] + iz * cell.length_c
            ] as [number, number, number]
          })
        }
      }
    }
  }
  
  // Regenerate bonds for supercell
  const maxBondLength = 2.5
  for (let i = 0; i < superAtoms.length; i++) {
    for (let j = i + 1; j < superAtoms.length; j++) {
      const atom1 = superAtoms[i]
      const atom2 = superAtoms[j]
      
      const dx = atom2.position[0] - atom1.position[0]
      const dy = atom2.position[1] - atom1.position[1]
      const dz = atom2.position[2] - atom1.position[2]
      const distance = Math.sqrt(dx*dx + dy*dy + dz*dz)
      
      const minBondLength = (atom1.radius + atom2.radius) * 0.8
      const adjustedMaxBondLength = (atom1.radius + atom2.radius) * 2.5
      
      if (distance > minBondLength && distance < Math.min(maxBondLength, adjustedMaxBondLength)) {
        superBonds.push({
          start: atom1.position,
          end: atom2.position,
          color: '#888888'
        })
      }
    }
  }
  
  return {
    ...crystalData,
    name: `${crystalData.name} (${nx}×${ny}×${nz} supercell)`,
    atoms: superAtoms,
    bonds: superBonds
  }
}