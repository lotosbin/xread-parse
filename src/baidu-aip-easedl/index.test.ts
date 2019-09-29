import {getAccessToken} from "./index";
import {describe} from "mocha";
import {expect} from "chai";

describe('测试', function () {
    it('get access token should success', function () {
        var accessToken = getAccessToken();
        expect(!!accessToken);
    });
});