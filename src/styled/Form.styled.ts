import styled from "styled-components";
import Form from "../components/Form";
import vars from "./variables";

const FormSTL = styled(Form)`
    margin-top: ${vars.sizes.gap};
    display: flex;
    flex-direction: column;
    border: 4px solid ${vars.colors.borderDefault};
    border-radius: ${vars.sizes.borderRadSmall};
    background-color: ${vars.colors.textDefault};

    .listItem {
        margin-inline: ${vars.sizes.gap};
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        border-left: 4px solid white;

         * {
            color: ${vars.colors.borderDefault};
            padding-inline: ${vars.sizes.gap};

        }
        
        
        p {
            /* padding: .5rem .3rem; */
        }
    }
    .error {
        border-left: 4px solid red;
        color: ${vars.colors.borderDefault}

    }

    .simpleModeSwitch {
        display: none;
    }
    @media only screen and (min-width: 700px) {
    .simpleModeSwitch {
        display: flex;

        input {
            visibility: collapse;
        }
    }
}
`

export default FormSTL;