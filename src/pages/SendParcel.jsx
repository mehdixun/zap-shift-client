import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };

  const serviceCenter = useLoaderData();

  // Unique Regions
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  // Watching sender region from form
  const senderRegion = useWatch({control ,name: "senderRegion"});

  // Get districts by region
  const districtsByRegion = (region) => {
    if (!region) return [];
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return [...new Set(districts)];
  };

  const senderDistrictList = districtsByRegion(senderRegion);

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center">Send A Parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel type */}
        <div>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="label ml-5">
            <input
              type="radio"
              {...register("parcelType")}
              value="none-document"
              className="radio"
            />
            None - Document
          </label>
        </div>

        {/* Parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* Two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          {/* Sender info */}
          <div>
            <h3 className="text-2xl font-bold">Sender Details</h3>

            {/* Sender name */}
            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
            </fieldset>

            {/* Sender region */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue=""
                className="select w-full"
              >
                <option disabled value="">
                  Pick a Region
                </option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Sender districts */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select
                {...register("senderDistricts")}
                defaultValue=""
                className="select w-full"
              >
                <option disabled value="">
                  Pick a District
                </option>
                {senderDistrictList.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Sender address */}
            <fieldset className="fieldset">
              <label className="label">Sender Address</label>
              <input
                type="text"
                {...register("address")}
                className="input w-full"
                placeholder="Sender Address"
              />
            </fieldset>

            {/* Sender phone */}
            <fieldset className="fieldset">
              <label className="label">Sender Phone Number</label>
              <input
                type="number"
                {...register("senderPhoneNumber")}
                className="input w-full"
                placeholder="Sender Phone Number"
              />
            </fieldset>

            {/* Sender district (text) */}
            <fieldset className="fieldset">
              <label className="label">Sender District</label>
              <input
                type="text"
                {...register("senderDistrict")}
                className="input w-full"
                placeholder="Sender District"
              />
            </fieldset>
          </div>

          {/* Receiver info */}
          <div>
            <h3 className="text-2xl font-bold">Receiver Details</h3>
                
                {/* Receiver name */}
            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select defaultValue="" className="select w-full">
                <option disabled value="">
                  Pick a Region
                </option>
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Receiver Phone Number</label>
              <input
                type="number"
                {...register("receiverPhoneNumber")}
                className="input w-full"
                placeholder="Receiver Phone Number"
              />
            </fieldset>

            
          </div>
        </div>

        <input
          type="submit"
          className="btn w-full my-5 bg-green-400"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
