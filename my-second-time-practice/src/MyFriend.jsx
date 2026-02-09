export default function ({friend}){

    const {name, email} = friend;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}