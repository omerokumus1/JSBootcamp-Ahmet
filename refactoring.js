let strings = {
    "validCredentials": "Valid credentials",
    "searchAdmin": "search admin in jobtitle field",
}

function testWholeApi() {
    return () => {
        xit(strings.validCredentials, login());

        xit(strings.searchAdmin, startVideo())

        xit("Valid credentials", f1())
    };
}

describe('str1', testWholeApi())

function startVideo() {

}

function login() {
    return async () => {
        await NextportLoginPage.open();
        await NextportLoginPage.loginClick();
        await browser.maximizeWindow();

    };
}

const profile1 = getProfile();
const profile2 = [jobTitle, email, manager, coach]

let i = 0;
while(i < profile2.length){
    Asserts.equal(profile1[i], profile2[i])
    i++;
}
