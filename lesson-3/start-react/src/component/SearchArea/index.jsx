import { InfoCircleOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip } from "antd";
const SearchArea = () => {
    return <>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: "18px 0px" }}>
            <Box>
                
            </Box>
            <Input
                className='w-fit'
                width={'318px'}
                placeholder="Search Item"
                prefix={<SearchOutlined />}
                suffix={
                    <Tooltip title="Search Item">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
            />
            <Button variant='outlined' type="primary">Search</Button>
        </div>
    </>
}

export default SearchArea;