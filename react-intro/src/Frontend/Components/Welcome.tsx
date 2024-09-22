type WelcomeProps = {
    name: string,
    age: number;
}

export default function Welcome(props: WelcomeProps) {
    return (
        <header>
            <h1>Hi {props.name}</h1>
            <p>You are {props.age} yrs old</p>
        </header>
    )
}