type FooterProps = {
    text: string;
}

export default function Footer(props: FooterProps) {
    const { text } = props
    return <h1 className="FooterText">{text}</h1>
}