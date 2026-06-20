import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Trash2,
  Plus,
  X,
  UserPlus,
} from "lucide-react";

const FamilyMembers = () => {

  const [members, setMembers] = useState([
  {
    name: "Rahul Prasad",
    relation: "Son",
    phone: "9876543210",
    priority: "Primary",
  },
  {
    name: "Sunita Prasad",
    relation: "Daughter",
    phone: "9876543211",
    priority: "Secondary",
  },
]);

const [showModal, setShowModal] = useState(false);

const [newMember, setNewMember] = useState({
  name: "",
  relation: "",
  phone: "",
  priority: "Common",
});

const primaryMember = members.find(
  (member) => member.priority === "Primary"
);

const handleAddMember = () => {
  if (
    !newMember.name ||
    !newMember.relation ||
    !newMember.phone
  ) {
    alert("Please fill all fields");
    return;
  }

  if (!/^\d{10}$/.test(newMember.phone)) {
    alert("Enter a valid 10-digit phone number");
    return;
  }

  if (
    newMember.priority === "Primary" &&
    members.some(
      (member) => member.priority === "Primary"
    )
  ) {
    alert("Only one Primary Contact is allowed.");
    return;
  }

  setMembers([...members, newMember]);

  setNewMember({
    name: "",
    relation: "",
    phone: "",
    priority: "Common",
  });

  setShowModal(false);
};

const handleDelete = (index) => {
  if (
    window.confirm(
      `Remove ${members[index].name}?`
    )
  ) {
    setMembers(
      members.filter((_, i) => i !== index)
    );
  }
};

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Family Members
        </h1>

        <p className="text-slate-500 mt-2">
          Manage caregivers and emergency contacts.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-slate-500">
            Total Members
          </p>

          <h2 className="text-3xl font-bold text-teal-600">
            {members.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-slate-500">
            Active Contacts
          </p>

          <h2 className="text-3xl font-bold text-emerald-500">
            {members.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-slate-500">
            Emergency Priority
          </p>

          <h2 className="text-lg font-bold text-red-500">
            {members[0]?.name}
          </h2>
        </div>

      </div>

      {/* Emergency Card */}
      <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-3xl p-6 mb-6 shadow-lg">

  <h2 className="font-bold text-xl">
    Primary Emergency Contact
  </h2>

  <p className="mt-2 text-red-50">
    {primaryMember?.name || "No Primary Contact Selected"} will receive SOS alerts,
    live location updates and emergency notifications.
  </p>

</div>

      {/* Members */}
      <div className="grid md:grid-cols-2 gap-6">

        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition"
          >

            <div className="flex gap-4">

              {/* Avatar */}
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-lg">

                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}

              </div>

              <div className="flex-1">

                <div className="flex items-center gap-2">

                  <h3 className="font-bold text-lg text-slate-800">
                    {member.name}
                  </h3>

                  <span
  className={`px-2 py-1 rounded-full text-xs font-medium ${
    member.priority === "Primary"
      ? "bg-red-100 text-red-600"
      : member.priority === "Secondary"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-slate-100 text-slate-600"
  }`}
>
  {member.priority}
</span>
                </div>

                <p className="text-slate-500">
                  {member.relation}
                </p>

                <p className="text-slate-500 mt-2 flex items-center gap-2">
                  <Phone size={15} />
                  {member.phone}
                </p>

                <p className="text-xs text-slate-400 mt-1">
                  Last contacted 2 hours ago
                </p>

              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5">

              <button
  onClick={() =>
    window.open(`tel:${member.phone}`)
  }
  className="flex-1 bg-emerald-500 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600"
>
  <Phone size={16} />
  Call
</button>

              <button
  onClick={() =>
    window.open(
      `https://wa.me/91${member.phone}`,
      "_blank"
    )
  }
  className="flex-1 bg-teal-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-700"
>
  <MessageCircle size={16} />
  WhatsApp
</button>

              <button
                onClick={() => handleDelete(index)}
                className="px-3 text-red-500 hover:bg-red-50 rounded-xl"
              >
                <Trash2 size={18} />
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Add Member Button */}
      <button
        onClick={() => setShowModal(true)}
        className="
          w-full
          mt-8
          bg-gradient-to-r
          from-teal-600
          to-cyan-600
          text-white
          py-4
          rounded-2xl
          font-semibold
          flex
          items-center
          justify-center
          gap-2
          shadow-lg
          hover:scale-[1.01]
          transition
        "
      >
        <Plus size={18} />
        Add New Family Member
      </button>

      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl p-6 w-[420px] shadow-xl">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          Add Family Member
        </h2>

        <button
          onClick={() =>
            setShowModal(false)
          }
        >
          <X />
        </button>

      </div>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Full Name"
          value={newMember.name}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              name: e.target.value,
            })
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Relation"
          value={newMember.relation}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              relation:
                e.target.value,
            })
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={newMember.phone}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              phone:
                e.target.value,
            })
          }
          className="w-full border rounded-xl p-3"
        />

        <select
          value={newMember.priority}
          onChange={(e) =>
            setNewMember({
              ...newMember,
              priority:
                e.target.value,
            })
          }
          className="w-full border rounded-xl p-3"
        >
          <option value="Primary">
            Primary Contact
          </option>

          <option value="Secondary">
            Secondary Contact
          </option>

          <option value="Common">
            Common Contact
          </option>
        </select>

        <button
          onClick={handleAddMember}
          className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700"
        >
          Add Member
        </button>

      </div>

    </div>

  </div>
)}

    </div>
  );
};

export default FamilyMembers;