import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
    }

    #root {
        width: 100%;
        max-width: 800px;
    }

`

export default Global
