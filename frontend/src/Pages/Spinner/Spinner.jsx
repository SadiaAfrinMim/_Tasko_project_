import React, { useState } from 'react';
import { Select } from 'antd';
import { Wheel } from 'react-custom-roulette';

const { Option } = Select;

const Spinner = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [selected, setSelected] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [statusValue, setStatusValue] = useState('');
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: 'Development', style: { backgroundColor: '#FF6B6B' } },
    { option: 'Design', style: { backgroundColor: '#FFD93D' } },
    { option: 'Marketing', style: { backgroundColor: '#6BCB77' } },
    { option: 'Research', style: { backgroundColor: '#4D96FF' } },
    { option: 'Testing', style: { backgroundColor: '#FF6FD8' } },
    { option: 'Strategy', style: { backgroundColor: '#845EC2' } }
  ];

  const handleSpinClick = () => {
    const rand = Math.floor(Math.random() * data.length);
    setPrizeNumber(rand);
    setMustSpin(true);
    setSpinning(true);
  };

  const filterOption = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return (
    <div className="min-h-screen max-w-10/12 mx-auto bg-[#F8F7FF] p-4 rounded-[2.5rem] shadow-lg">
      <div className="w-full flex items-center justify-between p-4 space-y-4">
        <p className="text-center font-semibold text-2xl mb-4">Task Spinner</p>

        <div>
          <Select
            showSearch
            value={statusValue}
            onChange={(value) => setStatusValue(value)}
            placeholder="Filter by Status"
            optionFilterProp="children"
            filterOption={filterOption}
            style={{
              width: '100%',
              border: '2px solid #F4F4F4',
              borderRadius: '12px',
              height: '48px'
            }}
            suffixIcon={<span className="text-[#5E56E7]">▼</span>}
            dropdownStyle={{
              borderRadius: '12px',
              border: '2px solid #F4F4F4',
              boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
            }}
          >
            {[
              'Not Identified',
              'Closed',
              'Communicated',
              'Identified',
              'Resolved',
              'Cancelled'
            ].map((status, idx) => (
              <Option key={idx} value={status}>
                <div className="flex justify-between items-center">
                  <span>{status}</span>
                  {statusValue === status && (
                    <span className="text-[#5E56E7]">✔</span>
                  )}
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center space-y-8'>
        <div className="relative">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            outerBorderWidth={8}
            outerBorderColor="#5E56E7"
            radiusLineWidth={2}
            radiusLineColor="#FFFFFF"
            fontSize={14}
            textDistance={70}
            onStopSpinning={() => {
              setMustSpin(false);
              setSpinning(false);
              setSelected(data[prizeNumber].option);
            }}
          />
          <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 z-10">
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-red-600 drop-shadow-md"></div>
          </div>
        </div>

        <button
          onClick={handleSpinClick}
          className="bg-[#5E56E7] text-white px-6 py-2 rounded-xl hover:bg-[#4c44d1] transition duration-300"
          disabled={spinning}
        >
          {spinning ? 'Spinning...' : 'Spin Now'}
        </button>

        {selected && !spinning && (
          <p className="text-lg font-semibold text-green-600">Selected: {selected}</p>
        )}
      </div>
    </div>
  );
};

export default Spinner;
