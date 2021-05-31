function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    return function ()
    {console.log(); }
}

function returnsAnAnonymousFunction() {
    return function ()
    {console.log(); }
}