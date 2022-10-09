import styled from "styled-components"
import { keyframes } from "styled-components"
import * as Accordion from "@radix-ui/react-accordion"

export const Container = styled.main`
    --animate-duration: 0.1s;
    margin: 8rem auto 0;
    width: 100%;
    padding: 0 2rem;
    max-width: 780px;
`

export const CardSection = styled.section`
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 100%;
        padding: 1rem 1.5rem;
    }
`

export const AccordionRoot = styled(Accordion.Root)`
    box-shadow: 10px 10px 36px -7px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
`

const slideDown = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" },
})

const slideUp = keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 },
})

export const Content = styled(Accordion.Content)`
    background: ${(props) => props.theme.colors.backgroundSecondary};
    font-size: 1.3rem;
    border: 1px solid transparent;
    line-height: 1.8rem;
    text-align: justify;

    &[data-state="open"] {
        filter: brightness(0.85);
        animation: ${slideDown} 0.3s ease-out;
    }

    &[data-state="closed"] {
        animation: ${slideUp} 0.3s ease-out;
    }
`

export const ContentText = styled.div`
    p {
        padding: 1rem 1.5rem;
        text-align: left;
    }
`

export const Item = styled(Accordion.Item)`
    margin-top: 1;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.colors.backgroundSecondary};

    &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        margin-top: 0;
    }

    &:last-child {
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:focus-within {
        z-index: 10;
        border: 2px solid ${(props) => props.theme.colors.outlineColor};
    }
`

export const Trigger = styled(Accordion.Trigger)`
    align-items: center;
    all: unset;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border-bottom: 1px solid ${(props) => props.theme.colors.borderColor};
    display: flex;
    height: 3rem;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;

    &:hover {
        transition: 0.2s;
        filter: brightness(1.1);
    }

    span {
        border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
        display: table;
        font-size: 2.2rem;
        font-weight: 500;

        &.smile-cards {
            border: 0;
        }
    }
`

export const Header = styled(Accordion.Header)`
    /* all: unset; */
    display: flex;
`
