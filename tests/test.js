const strings = ['我是', '我是世界', '我是世界上', '我是世界上最好的人']

let lastPos = 0

async function main() {
  while (strings.length) {
    const text = strings.shift()
    process.stdout.write(text.slice(lastPos, text.length))
    lastPos = text.length
		await new Promise(o => setTimeout(o, 1000))
  }
}

main()
