import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Products from "./pages/product/Products";
import EditProduct from "./pages/product/EditProduct";
import AddProduct from "./pages/product/AddProduct";
//User
import Users from "./pages/user/Users";
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";
import Me from "./pages/user/Me";

// Master Data
import Location from "./pages/masterdata/location/Location";
import AddLocation from "./pages/masterdata/location/AddLocation";
import EditLocation from "./pages/masterdata/location/EditLocation";

import Workcenter from "./pages/masterdata/workcenter/Workcenter";
import AddWorkcenter from "./pages/masterdata/workcenter/AddWorkcenter";
import EditWorkcenter from "./pages/masterdata/workcenter/EditWorkcenter";

import Role from "./pages/masterdata/role/Role";
import AddRole from "./pages/masterdata/role/AddRole";
import EditRole from "./pages/masterdata/role/EditRole";

import Dms from "./pages/masterdata/dms/Dms";
import AddDms from "./pages/masterdata/dms/AddDms";
import EditDms from "./pages/masterdata/dms/EditDms";

import Group from "./pages/masterdata/group/Group";
import AddGroup from "./pages/masterdata/group/AddGroup";
import EditGroup from "./pages/masterdata/group/EditGroup";

import Condition from "./pages/masterdata/condition/Condition";
import AddCondition from "./pages/masterdata/condition/AddCondition";
import EditCondition from "./pages/masterdata/condition/EditCondition";
// Assets
import AssetList from "./pages/assets/assets_list/Assets";
import AssetLocation from "./pages/assets/assets_location_history/AssetsLocation";
import AssetTransfer from "./pages/assets/assets_transfer/AssetsTransfer";
// Schedule
import PlanningList from "./pages/schedule/planning/Planning";
import ScheduledList from "./pages/schedule/scheduled/Scheduled";
import ScheduleWizard from "./pages/schedule/wizard/Wizard";
//Template
import TemplateList from "./pages/template/Template";
//Work Report
import WorkRequestList from "./pages/work_report/work_request/WorkRequest";
import WorkOrderList from "./pages/work_report/work_order/WorkOrder";
import WorkResultList from "./pages/work_report/result/Result";
import HmKmList from "./pages/work_report/hm_km/HmKm";
//Inventory
import ConsumeList from "./pages/inventory/consume/Consume";
import MasterPartList from "./pages/inventory/master_parts/MasterPart";
import PrList from "./pages/inventory/purchase_request/PurchaseRequest";
import ReceivedList from "./pages/inventory/received/Received";
import StorageList from "./pages/inventory/storage/Storage";
import TransferList from "./pages/inventory/transfer/Transfer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Master Data */}
          <Route path="/masterdata/location" element={<Location />} />
          <Route path="/masterdata/location/add" element={<AddLocation />} />
          <Route path="/masterdata/location/edit/:id" element={<EditLocation />} />
          <Route path="/masterdata/workcenter" element={<Workcenter />} />
          <Route path="/masterdata/workcenter/add" element={<AddWorkcenter />} />
          <Route path="/masterdata/workcenter/edit/:id" element={<EditWorkcenter />} />
          <Route path="/masterdata/role" element={<Role />} />
          <Route path="/masterdata/role/add" element={<AddRole />} />
          <Route path="/masterdata/role/edit/:id" element={<EditRole />} />
          <Route path="/masterdata/dms" element={<Dms />} />
          <Route path="/masterdata/dms/add" element={<AddDms />} />
          <Route path="/masterdata/dms/edit/:id" element={<EditDms />} />
          <Route path="/masterdata/group" element={<Group />} />
          <Route path="/masterdata/group/add" element={<AddGroup />} />
          <Route path="/masterdata/group/edit/:id" element={<EditGroup />} />
          <Route path="/masterdata/condition" element={<Condition />} />
          <Route path="/masterdata/condition/add" element={<AddCondition />} />
          <Route path="/masterdata/condition/edit/:id" element={<EditCondition />} />
          {/* Asset */}
          <Route path="/assets" element={<AssetList />} />
          <Route path="/assets-location" element={<AssetLocation />} />
          <Route path="/assets-transfer" element={<AssetTransfer />} />
          {/* Schedule */}
          <Route path="/planning" element={<PlanningList />} />
          <Route path="/scheduled" element={<ScheduledList />} />
          <Route path="/schedule-wizard" element={<ScheduleWizard />} />
          {/* Template */}
          <Route path="/template" element={<TemplateList />} />
          {/* Work Report */}
          <Route path="/work-request" element={<WorkRequestList />} />
          <Route path="/work-order" element={<WorkOrderList />} />
          <Route path="/work-result" element={<WorkResultList />} />
          <Route path="/hm-km-maintenance" element={<HmKmList />} />
          {/* Inventory */}
          <Route path="/consume" element={<ConsumeList />} />
          <Route path="/master-parts" element={<MasterPartList />} />
          <Route path="/purchase-request" element={<PrList />} />
          <Route path="/received" element={<ReceivedList />} />
          <Route path="/storage" element={<StorageList />} />
          <Route path="/transfer" element={<TransferList />} />
          {/* User */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/me/:id" element={<Me />} />
          {/* Dummy */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
