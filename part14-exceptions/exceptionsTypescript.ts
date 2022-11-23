function doOrThrow<T>(error: T): true {
    if (Math.random() > .5) {
        console.log('true')
        return true;
    } else {
        throw error;
    }
}

try {
    doOrThrow('err1');
    doOrThrow('err2');
    doOrThrow('err3');
} catch (err: unknown) {
    if (err instanceof Error)
        console.log(err, 'error');
    else if (typeof err === 'string')
        console.log(err.toUpperCase());
} finally {
    console.log("Terminated");
}