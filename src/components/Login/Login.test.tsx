import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals'
import { Login } from "./index";

describe("Snapshot tests for login page", () => {
    it("Should show the form only", () => {

        const component = renderer.create(
            <Login />
        )

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })

    it("Should show a message when the user does not provide username", () => {

        const component = renderer.create(
            <Login />
        )       

        renderer.act(() => {
            component.root.findByType('button').props.onClick()
        })

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    })
})