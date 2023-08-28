import "@needle-tools/engine";
import { NeedleEngineAttributes } from "@needle-tools/engine";
import React, { useRef } from 'react'

export function NeedleEngine(props: { children?: React.ReactNode } & NeedleEngineAttributes) {
    return <needle-engine {...props}>
        {props.children}
    </needle-engine>;
}
