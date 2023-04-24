import React from 'react'

export const Error = (props) => {
    const errorApp = props.errorApp;
    const error = props.error;

    return (
        <>
            {error &&
            <p className="
            bg-red-500
            text-white
            p-1
            rounded-lg
            text-center
            mb-4
            ">
                {errorApp}
            </p>
            }
        </>
    );
}
