// Prism highlighter with only the languages the learning pages use (keeps ~230 kB of grammars
// out of the bundle). Unregistered languages render as plain text.
import { PrismLight } from 'react-syntax-highlighter'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'

PrismLight.registerLanguage('python', python)
PrismLight.registerLanguage('bash', bash)
PrismLight.registerLanguage('shell', bash)
PrismLight.registerLanguage('sh', bash)

export default PrismLight
