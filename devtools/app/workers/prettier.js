/* eslint-disable no-undef */
self.onmessage = async function (event) {
  self.postMessage({
    uid: event.data.uid,
    message: await handleMessage(event.data.message)
  })
}

function handleMessage(message) {
  switch (message.type) {
    case 'format':
      return handleFormatMessage(message)
  }
}

async function handleFormatMessage(message) {
  if (!globalThis.prettier) {
    await Promise.all([
      import('https://unpkg.com/prettier@3.3.3/standalone.js'),
      import('https://unpkg.com/prettier@3.3.3/plugins/html.js'),
      import('https://unpkg.com/prettier@3.3.3/plugins/postcss.js'),
      import('https://unpkg.com/prettier@3.3.3/plugins/babel.js'),
      import('https://unpkg.com/prettier@3.3.3/plugins/estree.js'),
      import('https://unpkg.com/prettier@3.3.3/plugins/typescript.js')
    ])
  }

  console.log('message', message)
  const { options, source } = message
  const formatted = await prettier.format(source, {
    parser: 'vue',
    plugins: prettierPlugins,
    ...options
  })

  console.log('formatted', formatted)
  return formatted
}
