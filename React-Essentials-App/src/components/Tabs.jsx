export default function Tabs({ ButtonContainer = "menu", buttons, children }) {
    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    );
}