import styled from "styled-components"

export const Container = styled.div`
    --animate-duration: 0.2s;
    background: ${(props) => props.theme.colors.bgButtons};
    border-radius: 10px;
    bottom: 1px;
    box-shadow: 5px 8px 11px ${(props) => props.theme.colors.shadowColor};
    display: table;
    left: calc(50% + 80px);
    position: relative;
    right: 1px;
    user-select: none;
    top: -8px;
    visibility: visible;
    width: 200px;
    z-index: 910;

    &::after {
        background: transparent;
        bottom: 0;
        border-radius: 20px 20px 0 0;
        content: "";
        cursor: pointer;
        height: 55px;
        left: 2px;
        position: absolute;
        right: 0;
        top: -55px;
        width: 3rem;
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 0.8rem 0;

        a {
            align-items: center;
            border-radius: 8px;
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            padding: 0.8rem 0;
            padding-left: 0.5rem;

            svg {
                color: ${(props) => props.theme.colors.colorIconMenu};
            }

            &:hover {
                transition: 0.2s;
                background: ${(props) => props.theme.colors.borderColor};
            }

            &.disabled {
                cursor: not-allowed;
                opacity: 0.5;
                background: transparent;
            }
        }
    }
`
