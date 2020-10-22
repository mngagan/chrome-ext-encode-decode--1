let utils = {

}

utils.encode = ({ textAreaRef, resultRef, copyButtonRef }) => {
    let { current: { value } } = textAreaRef
    resultRef.current.value = btoa(value)
    copyButtonRef.current.click()
}

utils.decode = ({ textAreaRef, resultRef, copyButtonRef }) => {
    let { current: { value } } = textAreaRef
    resultRef.current.value = atob(value)
    copyButtonRef.current.click()
}

utils.removeLineBreaks = ({ textAreaRef, resultRef, copyButtonRef }) => {
    let { current: { value } } = textAreaRef
    resultRef.current.value = value.replace(/(\r\n|\n|\r)/gm, " ")
    copyButtonRef.current.click()
}

utils.unEscape = ({ textAreaRef, resultRef, copyButtonRef }) => {
    let { current: { value } } = textAreaRef
    resultRef.current.value = unescape(value)
    copyButtonRef.current.click()
}
export default utils