function customRender(reactElement,container){
    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if (prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}




// React element

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        traget:'_blank'
    },
    children: 'Google'
}

// render contain on html

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)