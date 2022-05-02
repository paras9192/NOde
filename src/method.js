let test = async function() {

    try {
        await console.log("Done")
    } catch (err) {
        console.log(err)
    }
}

test()