import React, {useEffect} from 'react'

function Title(title) {

    useEffect(() => {
        document.title = `${title} | Shruti Patil `
    }, [title]);

    return null;
}

export default Title
