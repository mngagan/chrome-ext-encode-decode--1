import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { Container } from './styled/container';
import { H1 } from './styled/h1';
import { Section } from './styled/section';
import { theme, themeList } from './styled/theme';
import { TextArea } from './styled/textArea'
import { Text } from './styled/text'
import { Button } from './styled/button';
import utils from './utils';
// import { utils } from './utils'
import ClipboardJS from 'clipboard'
import { Github } from '@styled-icons/boxicons-logos'
import { Brush } from '@styled-icons/boxicons-solid/Brush'



function app() {
    const [mode, setmode] = useState('light')
    const textAreaRef = useRef(null)
    const resultRef = useRef(null)
    const copyButtonRef = useRef(null)
    window.textAreaRef = textAreaRef
    window.resultRef = resultRef
    window.copyButtonRef = copyButtonRef


    const handleChangeMode = () => {
        let index = themeList.indexOf(mode)
        setmode(index > -1 && index < themeList.length - 1 ? themeList[index + 1] : themeList[0])
    }
    useEffect(() => {
        new ClipboardJS('.clipboard-btn');
        chrome?.storage?.sync.get(['mode'], function (items) {
            console.log('Settings retrieved', items);
            items.mode && setmode(items.mode)
        });
    }, [])

    useEffect(() => {
        chrome?.storage?.sync.set({ 'mode': mode }, function () {
            console.log('Settings saved');
        });
    }, [mode])
    return (
        <ThemeProvider theme={theme({ mode })}>
            <Container className="nopad">
                <Section className='col-sm-12'>
                    {/* <Button onClick={handleChangeMode} id='change-theme-button'>toggle theme</Button> */}
                    <Brush onClick={handleChangeMode} id='change-theme-button' type='button' size='25' title='Change Theme' />
                    <H1>Tool</H1>
                </Section>
                <hr />
                <Section className='col-sm-12'>
                    <Section>
                        <Text>Your content here :</Text>
                        <TextArea id='targetTextArea' ref={textAreaRef} />
                    </Section>
                    <Section>
                        <Text>Result :</Text>
                        <TextArea id="resultTextArea" ref={resultRef} />
                    </Section>
                    <br />
                    <Button onClick={() => { utils.encode({ textAreaRef, resultRef, copyButtonRef }) }}>Encode</Button>
                    <Button onClick={() => { utils.decode({ textAreaRef, resultRef, copyButtonRef }) }}>Decode</Button>
                    <Button onClick={() => { utils.removeLineBreaks({ textAreaRef, resultRef, copyButtonRef }) }}>Remove line breaks</Button>
                    <Button ref={copyButtonRef} style={{ display: 'none' }} className='clipboard-btn' data-clipboard-target="#resultTextArea" onClick={() => { console.log('dummy clicked') }}>dummy</Button>
                </Section>
                <Section className='col-sm-12' id='code-info'>
                    Result will be copied to clipboard
                    <a href='https://github.com/mngagan/chrome-ext-encode-decode---1' target='_blank'><Github size='25' title='github' id='github-icon' /></a>
                </Section>
            </Container >
        </ThemeProvider>
    )
}

export default app
