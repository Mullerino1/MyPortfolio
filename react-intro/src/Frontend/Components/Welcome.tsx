type WelcomeProps = {
    user: {
    name: string,
    age: number;
    }
}

export default function Welcome(props: WelcomeProps) {
    const { user } = props
    return (
        <>
            <h1>Hi {user.name}</h1>
            <p>You are {user.age} yrs old</p>
        </>
    )
}