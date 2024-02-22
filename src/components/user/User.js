import { Button, Flex, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div>
            <Flex align='center' justify='space-between'>

                <Typography.Title level={3} className='tracking-wider'> Testing </Typography.Title>
                <Link to='/create-user'> <Button > Create User</Button></Link>
            </Flex>
        </div>
    )
}

export default User
