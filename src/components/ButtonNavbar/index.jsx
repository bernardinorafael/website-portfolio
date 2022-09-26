import { Button } from "./styles";

export function ButtonNavbar({ buttonText, onClick }) {
    return <Button onClick={onClick}>{buttonText}</Button>;
}
