import {read} from 'to-vfile'
import {remark} from 'remark'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'

const file = await remark()
  .use(remarkGfm)
  .use(remarkGithub, {repository: "Santhin/playground"})
  .process(await read('CHANGELOG.md'))

console.log(String(file))