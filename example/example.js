const cn = '克己须要扫除廊清，一毫不存方是。有一毫在，则众恶相引而来'

class Init {
    constructor() {
        this.render()
    }
    render() {
        const family = [
            'PingFang-light',
            'PingFang',
            'PingFang-bold',
            'PingFang-bolder',
            'MiSans-lighter',
            'MiSans-light',
            'MiSans-normal',
            'MiSans-normal-bold',
            'MiSans-normal-bolder',
            "OPPOSans",
            "SourceHanSans-bold",
            "SourceHanSans",
            "WenQuanDengKuanWeiMiHei"
        ]
        const weights = ['light', 'normal', 'bold']
        family.map(font => {
            const container = this.createContainer(font)
            const title = this.createTitle(font)
            container.appendChild(title)
            weights.map(cur => {
                const ul = this.createItem(cur)
                ul.style.fontWeight = cur
                container.appendChild(ul)
            })
            document.body.appendChild(container)
        })
    }
    createItem(tip) {
        const ul = this.createElementByClass('item',"ul")
        const li = this.createElementByClass('line', "li")
        const span = this.createElementByClass(`tag ${tip}`, "span")
        const text = this.createElementByClass('text', "span")
        span.innerHTML = tip + ":"
        text.innerHTML = cn
        li.appendChild(span)
        li.appendChild(text)
        ul.appendChild(li)
        return ul
    }
    createTitle(content) {
        const title = this.createElementByClass('title')
        title.innerHTML = content
        return title
    }
    createContainer(fontFamily) {
        const div = this.createElementByClass('container')
        div.style.fontFamily = fontFamily
        return div
    }
    createElementByClass(className,tag="div") {
        const dom = document.createElement(tag)
        dom.className = className
        return dom
    }
}

new Init()