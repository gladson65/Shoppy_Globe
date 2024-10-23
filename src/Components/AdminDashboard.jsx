

function AdminDashBoard() {

    // getting user information from local storage
    const userName = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return(
        <>
            <div className="w-screen h-screen flex flex-col items-center justify-center gap-24">
                <h1 className="text-3xl py-2">DashBoard</h1>
                <div className="w-full p-2 h-auto flex flex-col justify-center items-center">
                    <img src="https://png.pngtree.com/png-vector/20220623/ourlarge/pngtree-online-profile-photo-male-circle-png-image_5320473.png"
                        className="w-40 rounded-full"/>

                    <h1 className="text-2xl">{userName}</h1>
                    <h1>{email}</h1>   
                </div>
                <div>

                </div>
            </div>

        </>
    )
}

export default AdminDashBoard;