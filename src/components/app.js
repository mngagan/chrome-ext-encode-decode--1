import React, { useRef, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { Container } from './styled/container';
import { H1 } from './styled/h1';
import { Section } from './styled/section';
import { theme } from './styled/theme';
import { TextArea } from './styled/textArea'
import { Text } from './styled/text'
import { Button } from './styled/button';


function app() {
    const [mode, setmode] = useState('light')
    const textAreaRef = useRef(null)
    window.textAreaRef = textAreaRef
    return (
        <ThemeProvider theme={theme({ mode })}>
            <Container className="nopad">
                <Section className='col-sm-12'>
                    <Button onClick={() => { setmode(mode == 'dark' ? "light" : 'dark') }}>toggle theme</Button>
                    <H1>Tool</H1>
                </Section>
                <hr />
                <Section className='col-sm-12'>
                    <Section>
                        <Text>text comp</Text>
                        <TextArea ref={textAreaRef} />
                    </Section>
                    <Button>encode</Button>
                    <Button>decode</Button>
                </Section>
            </Container >
        </ThemeProvider>
    )
}

export default app
