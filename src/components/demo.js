import React from "react";
function DeptName({deptname})
{
    if(deptname === 'CSE') {
        throw new Error('not Vaild')
    }
    return(
        <div>
            {deptname}
        </div>
    )
}

export default DeptName