import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 2;
        letter-spacing:1px;


    }

    :root{
        --white:#fff;
        --background: ${props => props.theme.colors.background  };
        --gray-line:#DCDDE0;
        --text: ${props => props.theme.colors.text  };
        --text-highlight:#b3b9ff;
        --title:${props => props.theme.colors.title};
        --red:#e83f5b;
        --green:#4cd62b;
        --blue:#5965e0;
        --blue-dark:#4953b8;
        --blue-twitter:#2aa9e0;

    }
@media(max-widht: 1080px){
    html{
        font-size:93.75%;
    }
}
@media(max-widht: 720px){
    html{
        font-size:87.5%;
    }
}
body{
    background: ${props => props.theme.colors.background  };
    color:${props => props.theme.colors.text};
}

body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
}

button{
    cursor: pointer;
}
a{
    color:inherit;
    text-decoration: none;
}

`;
