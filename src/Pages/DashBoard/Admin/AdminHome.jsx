import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTruck, FaUsers } from 'react-icons/fa6';
import { IoWalletSharp } from 'react-icons/io5';
import { PiBowlFoodFill, PiChefHatFill } from 'react-icons/pi';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import {
   BarChart,
   Bar,
   Cell,
   XAxis,
   YAxis,
   CartesianGrid,
   Pie,
   PieChart,
   ResponsiveContainer,
   Legend,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const AdminHome = () => {
   const axiosSecure = useAxiosSecure();
   const {
      data: stats,
      isPending,
      isError,
   } = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async () => {
         const { data } = await axiosSecure('/admin-stats');
         return data;
      },
   });

   const {
      data: orderStats = [],
      isPending: orderStatsPending,
      isError: orderStatsError,
   } = useQuery({
      queryKey: ['order-stats'],
      queryFn: async () => {
         const { data } = await axiosSecure('/order-stats');
         return data;
      },
   });
   console.log(orderStats);

   // Custom shape for the bar chart
   const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
   };

   const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return (
         <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
      );
   };

   // Pichart custom css and calculation
   const RADIAN = Math.PI / 180;
   const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
   }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
      const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

      return (
         <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
         >
            {`${((percent ?? 1) * 100).toFixed(0)}%`}
         </text>
      );
   };

   const piChartData = orderStats.map((data) => {
      return { name: data.category, value: data.revenue };
   });

   return (
      <section className="px-8 py-10">
         <h1 className="text-3xl font-bold font-cinzel text-[#151515]">
            Hi, Welcome Back!
         </h1>

         {/* Status card */}
         <div className="mt-7 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-7 justify-center items-center ">
            {/* Card */}
            <div className="card bg-[#C44BF7] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <IoWalletSharp className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">
                           $
                           {isPending || isError ? (
                              <>
                                 <span className="loading loading-ring loading-xl"></span>
                              </>
                           ) : (
                              stats?.revenue || 0
                           )}
                        </p>
                        <p className="text-base">Revenue</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Card */}
            <div className="card bg-[#E1BA7A] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <FaUsers className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">
                           {isPending || isError ? (
                              <>
                                 <span className="loading loading-ring loading-xl"></span>
                              </>
                           ) : (
                              stats?.users || 0
                           )}
                        </p>
                        <p className="text-base">Customers</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Card */}
            <div className="card bg-[#FF6194] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <PiBowlFoodFill className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">
                           {isPending || isError ? (
                              <>
                                 <span className="loading loading-ring loading-xl"></span>
                              </>
                           ) : (
                              stats?.menuItems || 0
                           )}
                        </p>
                        <p className="text-base">Products</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Card */}
            <div className="card bg-[#74B8FF] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <FaTruck className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">
                           {isPending || isError ? (
                              <>
                                 <span className="loading loading-ring loading-xl"></span>
                              </>
                           ) : (
                              stats?.orders || 0
                           )}
                        </p>
                        <p className="text-base">Orders</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/*  Charts */}
         <div className="mt-8 flex justify-center items-center gap-5 flex-col md:flex-col lg:flex-row">
            {/* Bar chart */}
            <div className="w-full md:w-1/2 min-w-[300px] h-[350px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                     data={orderStats}
                     margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                     }}
                  >
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="category" />
                     <YAxis />
                     <Bar
                        dataKey="quantity"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: 'top' }}
                     >
                        {orderStats.map((entry, index) => (
                           <Cell
                              key={`cell-${index}`}
                              fill={colors[index % 20]}
                           />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>

            {/* Pi chart */}
            <div className="flex-1/2 ">
               <div style={{ width: '400px', height: '400px', margin: 'auto' }}>
                  <ResponsiveContainer>
                     <PieChart>
                        <Legend></Legend>
                        <Pie
                           data={piChartData}
                           cx="50%"
                           cy="50%"
                           labelLine={false}
                           label={renderCustomizedLabel}
                           outerRadius={150}
                           fill="#8884d8"
                           dataKey="value"
                        >
                           {piChartData.map((entry, index) => (
                              <Cell
                                 key={`cell-${entry.name}`}
                                 fill={COLORS[index % COLORS.length]}
                              />
                           ))}
                        </Pie>
                     </PieChart>
                  </ResponsiveContainer>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AdminHome;
