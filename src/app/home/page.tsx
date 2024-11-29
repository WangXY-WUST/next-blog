/*
 * @Author: zhaoqr
 * @Date: 2024-10-24
 * @LastEditTime: 2024-10-24
 * @LastEditors: zhaoqr zhaoqr@channelsoft.com
 * @Description:
 * @FilePath: \blog\src\app\home\page.tsx
 */
const MyComponent = () => {
  return (
    <div>
      <h2>My Component</h2>
      <p>This is a component defined inside the Index page.</p>
    </div>
  );
};
export default function Index() {
  return (
    <div>
      <div>Index</div>
      <MyComponent />
    </div>
  )
}
