import * as React from 'react'
import { 
    cleanup,
    render 
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MyInput from '../src/MyInput'

describe('MyInput', () => {

    test('Should trigger onBeforeInput', async () => {
        const user = userEvent.setup()

        const { container } = render(<MyInput />)

        const input = container.getElementsByTagName('input')[0]

        await user.type(input, '12', {
            initialSelectionStart: 0,
            initialSelectionEnd: 0
        })

        expect(input.value).toBe('_1_2')

        cleanup()
    })
})