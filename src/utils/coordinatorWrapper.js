import React from 'react'
export default props => WrappedComponent => (
    <div className="stories-list">
        <WrappedComponent {...props} />
    </div>
)