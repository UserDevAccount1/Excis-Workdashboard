// Complete System Data for 8 Tables (including Final Table) - UPDATED TO YOUR SPECS
const systemData = {
    tables: [
        {
            id: 1,
            name: "Ticket Data Built-up",
            key: "ticket",
            description: "Primary service ticket entry point with RAG status indicators",
            color: "#2563eb",
            icon: "fa-clipboard-list",
            columns: [
                // YOUR ACTUAL FIELDS FROM THE TABLE
                { name: "Site Category", type: "dropdown", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Partner Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Customer Ticket Number", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Ticket Created Date", type: "date", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Partner Ticket Number", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Source of Request", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "PO number", type: "text", required: false, group: "basic", rag: "amber", requiredForFinal: true },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "State", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Site Address", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: true },
                { name: "Zip code", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "Activity Details", type: "text", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "Dispatch Category", type: "dropdown", required: false, group: "service", rag: "green", requiredForFinal: false },
                { name: "Ticket Priority", type: "dropdown", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "ETA Date", type: "date", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "ETA Time", type: "time", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "Technician Name", type: "text", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Technician IN Date", type: "date", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician IN Time", type: "time", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician OUT Date", type: "date", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician OUT Time", type: "time", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Total Hours", type: "number", required: true, group: "technician", rag: "green", requiredForFinal: true },
                // Cost calculation fields (24-48)
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true },
                { name: "Regular Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Overtime Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Weekend Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Travel Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Total Cost", type: "currency", required: true, group: "financial", rag: "amber", requiredForFinal: true },
                { name: "Remarks", type: "text", required: false, group: "quality", rag: "green", requiredForFinal: false }
            ]
        },
        {
            id: 2,
            name: "Service Rate Card",
            key: "rate",
            description: "Master rate reference for all services",
            color: "#7c3aed",
            icon: "fa-credit-card",
            columns: [
                { name: "Customer", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Region", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: false },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Supplier", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true },
                { name: "Category", type: "dropdown", required: true, group: "basic", rag: "amber", requiredForFinal: true },
                { name: "SR Region", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: false },
                { name: "Rate Type", type: "dropdown", required: true, group: "financial", rag: "amber", requiredForFinal: true },
                { name: "Rate Value", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "After Hours", type: "currency", required: true, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Weekend", type: "currency", required: true, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Travel", type: "currency", required: true, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Includes Travel", type: "boolean", required: true, group: "financial", rag: "green", requiredForFinal: false }
            ]
        },
        {
            id: 3,
            name: "Dispatch Table",
            key: "dispatch",
            description: "For on-demand service dispatches",
            color: "#10b981",
            icon: "fa-truck-fast",
            columns: [
                { name: "Site Category", type: "dropdown", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Partner Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Customer Ticket Number", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Ticket Created Date", type: "date", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Partner Ticket Number", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Source of Request", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "PO number", type: "text", required: false, group: "basic", rag: "amber", requiredForFinal: true },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "State", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Site Address", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: true },
                { name: "Zip code", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "Activity Details", type: "text", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "Dispatch Category", type: "dropdown", required: true, group: "service", rag: "green", requiredForFinal: false },
                { name: "Ticket Priority", type: "dropdown", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "ETA Date", type: "date", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "ETA Time", type: "time", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "Technician Name", type: "text", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Technician IN Date", type: "date", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician IN Time", type: "time", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician OUT Date", type: "date", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician OUT Time", type: "time", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Total Hours", type: "number", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true },
                { name: "Regular Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Total Cost", type: "currency", required: true, group: "financial", rag: "amber", requiredForFinal: true }
            ]
        },
        {
            id: 4,
            name: "Dispatch Stand By Charges",
            key: "standby",
            description: "For standby time billing",
            color: "#f59e0b",
            icon: "fa-clock",
            columns: [
                { name: "Site Category", type: "dropdown", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Partner Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "State", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Site Address", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: true },
                { name: "Standby Start Time", type: "datetime", required: true, group: "technician", rag: "amber", requiredForFinal: true },
                { name: "Standby End Time", type: "datetime", required: true, group: "technician", rag: "amber", requiredForFinal: true },
                { name: "Standby Hours", type: "number", required: true, group: "technician", rag: "amber", requiredForFinal: true },
                { name: "Standby Rate", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Total Standby Cost", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true }
            ]
        },
        {
            id: 5,
            name: "Dedicated Table",
            key: "dedicated",
            description: "For monthly dedicated resources",
            color: "#ef4444",
            icon: "fa-user-tie",
            columns: [
                { name: "Site Category", type: "dropdown", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Partner Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "State", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Site Address", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: true },
                { name: "Zip code", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "PO number", type: "text", required: false, group: "basic", rag: "amber", requiredForFinal: true },
                { name: "Technician Name", type: "text", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Band", type: "dropdown", required: true, group: "service", rag: "amber", requiredForFinal: true },
                { name: "Variant", type: "dropdown", required: true, group: "service", rag: "amber", requiredForFinal: true },
                { name: "Monthly rate", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "SLA %", type: "percentage", required: true, group: "quality", rag: "red", requiredForFinal: true },
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true }
            ]
        },
        {
            id: 6,
            name: "SV, Full & Half Day Visit",
            key: "sv",
            description: "For scheduled visits with flat rates",
            color: "#3b82f6",
            icon: "fa-calendar-check",
            columns: [
                { name: "Site Category", type: "dropdown", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Partner Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Customer Ticket Number", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Ticket Created Date", type: "date", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Partner Ticket Number", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Source of Request", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "PO number", type: "text", required: false, group: "basic", rag: "amber", requiredForFinal: true },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "State", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Site Address", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: true },
                { name: "Zip code", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "Activity Details", type: "text", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "Ticket Priority", type: "dropdown", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "ETA Date", type: "date", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "ETA Time", type: "time", required: true, group: "service", rag: "green", requiredForFinal: true },
                { name: "Technician Name", type: "text", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Technician IN Date", type: "date", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician IN Time", type: "time", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician OUT Date", type: "date", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Technician OUT Time", type: "time", required: true, group: "technician", rag: "green", requiredForFinal: false },
                { name: "Total Hours", type: "number", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Category", type: "dropdown", required: true, group: "service", rag: "green", requiredForFinal: false },
                { name: "Half Day Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Full Day Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Per Hour Rate", type: "currency", required: false, group: "financial", rag: "amber", requiredForFinal: false },
                { name: "Total Cost", type: "currency", required: true, group: "financial", rag: "amber", requiredForFinal: true },
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true }
            ]
        },
        {
            id: 7,
            name: "Project Work Table",
            key: "project",
            description: "For project-based engagements",
            color: "#8b5cf6",
            icon: "fa-project-diagram",
            columns: [
                { name: "Site Category", type: "dropdown", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Customer Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Partner Name", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: false },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "State", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Site Address", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: true },
                { name: "Zip code", type: "text", required: false, group: "geographic", rag: "amber", requiredForFinal: false },
                { name: "PO number", type: "text", required: false, group: "basic", rag: "amber", requiredForFinal: true },
                { name: "Project Start Date", type: "date", required: true, group: "service", rag: "amber", requiredForFinal: true },
                { name: "Project End Date", type: "date", required: true, group: "service", rag: "amber", requiredForFinal: true },
                { name: "Estimated Hours", type: "number", required: true, group: "technician", rag: "amber", requiredForFinal: true },
                { name: "Actual Hours", type: "number", required: true, group: "technician", rag: "amber", requiredForFinal: true },
                { name: "Project Rate", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Estimated Cost", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Actual Cost", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Currency", type: "dropdown", required: true, group: "financial", rag: "green", requiredForFinal: true }
            ]
        },
        {
            id: 8,
            name: "Final Ticket Data Table",
            key: "final",
            description: "Consolidated output - Auto-generated from all tables",
            color: "#1e293b",
            icon: "fa-ticket-alt",
            columns: [
                { name: "Request ID", type: "text", required: true, group: "system", rag: "green", requiredForFinal: true },
                { name: "CUSTOMER REFERENCE", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Requester", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Subject", type: "text", required: true, group: "service", rag: "amber", requiredForFinal: true },
                { name: "Site", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Priority", type: "dropdown", required: true, group: "service", rag: "amber", requiredForFinal: true },
                { name: "Assigned Technician", type: "text", required: true, group: "technician", rag: "green", requiredForFinal: true },
                { name: "Created Date", type: "date", required: true, group: "system", rag: "green", requiredForFinal: true },
                { name: "Start Date/Time", type: "datetime", required: true, group: "system", rag: "green", requiredForFinal: true },
                { name: "End Date/Time", type: "datetime", required: true, group: "system", rag: "green", requiredForFinal: true },
                { name: "Account", type: "text", required: true, group: "basic", rag: "green", requiredForFinal: true },
                { name: "Region", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Country", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "City", type: "text", required: true, group: "geographic", rag: "green", requiredForFinal: true },
                { name: "Engineer details", type: "text", required: false, group: "technician", rag: "green", requiredForFinal: false },
                { name: "PO NUMBER", type: "text", required: true, group: "financial", rag: "amber", requiredForFinal: true },
                { name: "Revenue", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Cost", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Profit", type: "currency", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Margin %", type: "percentage", required: true, group: "financial", rag: "red", requiredForFinal: true },
                { name: "Vendor PO", type: "text", required: true, group: "financial", rag: "amber", requiredForFinal: true },
                { name: "PRE Visit", type: "boolean", required: false, group: "service", rag: "green", requiredForFinal: false },
                { name: "POST Visit", type: "boolean", required: false, group: "service", rag: "green", requiredForFinal: false }
            ]
        }
    ],

    // Enhanced field mapping for auto-population
    fieldMapping: {
        "Site Category": { 
            tables: ["ticket", "dispatch", "standby", "dedicated", "sv", "project"], 
            transformation: "Direct mapping", 
            autoPopulates: "Determines which tables get populated" 
        },
        "Customer Name": { 
            tables: ["all"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "Customer": { 
            tables: ["rate", "final"], 
            transformation: "Same as Customer Name", 
            dependencies: ["Customer Name"] 
        },
        "Account": { 
            tables: ["final"], 
            transformation: "Same as Customer Name", 
            dependencies: ["Customer Name"] 
        },
        "Partner Name": { 
            tables: ["ticket", "dispatch", "standby", "dedicated", "sv", "project"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "Supplier": { 
            tables: ["rate"], 
            transformation: "Same as Partner Name", 
            dependencies: ["Partner Name"] 
        },
        "Country": { 
            tables: ["all"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "City": { 
            tables: ["all"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "Site Address": { 
            tables: ["ticket", "dispatch", "standby", "dedicated", "sv", "project"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "Site": { 
            tables: ["final"], 
            transformation: "Same as Site Address", 
            dependencies: ["Site Address"] 
        },
        "PO number": { 
            tables: ["ticket", "dispatch", "dedicated", "sv", "project"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "PO NUMBER": { 
            tables: ["final"], 
            transformation: "Same as PO number", 
            dependencies: ["PO number"] 
        },
        "Currency": { 
            tables: ["all"], 
            transformation: "From Rate Card or manual entry", 
            autoPopulates: "ALL tables" 
        },
        "Technician Name": { 
            tables: ["ticket", "dispatch", "dedicated", "sv"], 
            transformation: "Direct mapping", 
            autoPopulates: "ALL tables" 
        },
        "Assigned Technician": { 
            tables: ["final"], 
            transformation: "Same as Technician Name", 
            dependencies: ["Technician Name"] 
        },
        "Ticket Priority": { 
            tables: ["ticket", "dispatch", "sv"], 
            transformation: "Direct mapping", 
            autoPopulates: "Dispatch, SV tables" 
        },
        "Priority": { 
            tables: ["final"], 
            transformation: "Same as Ticket Priority", 
            dependencies: ["Ticket Priority"] 
        },
        "Activity Details": { 
            tables: ["ticket", "dispatch", "sv"], 
            transformation: "Direct mapping", 
            autoPopulates: "Dispatch, SV tables" 
        },
        "Customer Ticket Number": { 
            tables: ["ticket", "dispatch", "sv"], 
            transformation: "Direct mapping", 
            autoPopulates: "Dispatch, SV tables" 
        },
        "CUSTOMER REFERENCE": { 
            tables: ["final"], 
            transformation: "Same as Customer Ticket Number", 
            dependencies: ["Customer Ticket Number"] 
        }
    },

    // Sample data for preview
    sampleData: {
        hcl: {
            rev: {
                ticket: {
                    "Site Category": "Dispatch",
                    "Customer Name": "HCL Technologies",
                    "Partner Name": "Tech Services Ltd",
                    "Customer Ticket Number": "HCL-2024-00123",
                    "Customer Ticket Created Date": "2024-03-15",
                    "Partner Ticket Number": "TSL-2024-0456",
                    "Source of Request": "Email",
                    "PO number": "INDOPO-6502",
                    "Country": "India",
                    "State": "Karnataka",
                    "City": "Bangalore",
                    "Site Address": "Electronics City, Phase 1",
                    "Zip code": "560100",
                    "Activity Details": "Server Maintenance",
                    "Dispatch Category": "4H",
                    "Ticket Priority": "P1",
                    "ETA Date": "2024-03-16",
                    "ETA Time": "10:00",
                    "Technician Name": "Rajesh Kumar",
                    "Technician IN Date": "2024-03-16",
                    "Technician IN Time": "09:45",
                    "Technician OUT Date": "2024-03-16",
                    "Technician OUT Time": "17:45",
                    "Total Hours": "8",
                    "Currency": "INR",
                    "Regular Rate": "1200",
                    "Total Cost": "9600",
                    "Remarks": "Completed successfully"
                },
                rate: {
                    "Customer": "HCL Technologies",
                    "Region": "South Asia",
                    "Country": "India",
                    "Supplier": "Tech Services Ltd",
                    "Currency": "INR",
                    "Category": "Dispatch",
                    "SR Region": "Bangalore",
                    "Rate Type": "Hourly",
                    "Rate Value": "1200",
                    "After Hours": "1800",
                    "Weekend": "2400",
                    "Travel": "500",
                    "Includes Travel": "Yes"
                },
                dispatch: {
                    "Site Category": "Dispatch",
                    "Customer Name": "HCL Technologies",
                    "Partner Name": "Tech Services Ltd",
                    "Customer Ticket Number": "HCL-2024-00123",
                    "Customer Ticket Created Date": "2024-03-15",
                    "Partner Ticket Number": "TSL-2024-0456",
                    "Source of Request": "Email",
                    "PO number": "INDOPO-6502",
                    "Country": "India",
                    "State": "Karnataka",
                    "City": "Bangalore",
                    "Site Address": "Electronics City, Phase 1",
                    "Zip code": "560100",
                    "Activity Details": "Server Maintenance",
                    "Dispatch Category": "4H",
                    "Ticket Priority": "P1",
                    "ETA Date": "2024-03-16",
                    "ETA Time": "10:00",
                    "Technician Name": "Rajesh Kumar",
                    "Technician IN Date": "2024-03-16",
                    "Technician IN Time": "09:45",
                    "Technician OUT Date": "2024-03-16",
                    "Technician OUT Time": "17:45",
                    "Total Hours": "8",
                    "Currency": "INR",
                    "Regular Rate": "1200",
                    "Total Cost": "9600"
                },
                standby: {
                    "Site Category": "Standby",
                    "Customer Name": "HCL Technologies",
                    "Partner Name": "Tech Services Ltd",
                    "Country": "India",
                    "State": "Karnataka",
                    "City": "Bangalore",
                    "Site Address": "Electronics City",
                    "Standby Start Time": "2024-03-20 18:00",
                    "Standby End Time": "2024-03-21 06:00",
                    "Standby Hours": "12",
                    "Standby Rate": "2000",
                    "Total Standby Cost": "24000",
                    "Currency": "INR"
                },
                dedicated: {
                    "Site Category": "Dedicated",
                    "Customer Name": "HCL Technologies",
                    "Partner Name": "Tech Services Ltd",
                    "Country": "India",
                    "State": "Karnataka",
                    "City": "Bangalore",
                    "Site Address": "Electronics City, Phase 1",
                    "Zip code": "560100",
                    "PO number": "INDOPO-6502",
                    "Technician Name": "Amit Sharma",
                    "Band": "B2",
                    "Variant": "Senior",
                    "Monthly rate": "80000",
                    "SLA %": "95",
                    "Currency": "INR"
                },
                sv: {
                    "Site Category": "SV Visit",
                    "Customer Name": "HCL Technologies",
                    "Partner Name": "Tech Services Ltd",
                    "Customer Ticket Number": "HCL-2024-00234",
                    "Customer Ticket Created Date": "2024-03-10",
                    "Partner Ticket Number": "TSL-2024-0457",
                    "Source of Request": "Portal",
                    "PO number": "INDOPO-6503",
                    "Country": "India",
                    "State": "Karnataka",
                    "City": "Bangalore",
                    "Site Address": "Whitefield",
                    "Zip code": "560066",
                    "Activity Details": "Quarterly Maintenance",
                    "Ticket Priority": "P2",
                    "ETA Date": "2024-03-12",
                    "ETA Time": "09:00",
                    "Technician Name": "Priya Singh",
                    "Technician IN Date": "2024-03-12",
                    "Technician IN Time": "08:45",
                    "Technician OUT Date": "2024-03-12",
                    "Technician OUT Time": "17:15",
                    "Total Hours": "8.5",
                    "Category": "Full Day",
                    "Half Day Rate": "6000",
                    "Full Day Rate": "10000",
                    "Per Hour Rate": "1500",
                    "Total Cost": "10000",
                    "Currency": "INR"
                },
                project: {
                    "Site Category": "Project",
                    "Customer Name": "HCL Technologies",
                    "Partner Name": "Tech Services Ltd",
                    "Country": "India",
                    "State": "Karnataka",
                    "City": "Bangalore",
                    "Site Address": "Multiple locations",
                    "Zip code": "560100",
                    "PO number": "INDOPO-7001",
                    "Project Start Date": "2024-01-15",
                    "Project End Date": "2024-06-30",
                    "Estimated Hours": "1000",
                    "Actual Hours": "850",
                    "Project Rate": "1500",
                    "Estimated Cost": "1500000",
                    "Actual Cost": "1275000",
                    "Currency": "INR"
                },
                final: {
                    "Request ID": "REQ-1001",
                    "CUSTOMER REFERENCE": "HCL-2024-00123",
                    "Requester": "System Admin",
                    "Subject": "Server Maintenance | Bangalore | India | HCL Technologies",
                    "Site": "Electronics City, Phase 1",
                    "Priority": "P1",
                    "Assigned Technician": "Rajesh Kumar",
                    "Created Date": "2024-03-15",
                    "Start Date/Time": "2024-03-16 09:45",
                    "End Date/Time": "2024-03-16 17:45",
                    "Account": "HCL Technologies",
                    "Region": "South Asia",
                    "Country": "India",
                    "City": "Bangalore",
                    "Engineer details": "Rajesh Kumar - Tech Services Ltd",
                    "PO NUMBER": "INDOPO-6502",
                    "Revenue": "12000",
                    "Cost": "9600",
                    "Profit": "2400",
                    "Margin %": "20",
                    "Vendor PO": "INDO-PO-6502",
                    "PRE Visit": "Yes",
                    "POST Visit": "Yes"
                }
            }
        }
    },

    // Final Table Transformation Logic
    finalTable: [
        { field: "Request ID", source: "System", transformation: "Auto-generated sequential number", required: true },
        { field: "CUSTOMER REFERENCE", source: "Ticket Data", transformation: "Customer Ticket Number", required: true },
        { field: "Requester", source: "System", transformation: "Auto-set to 'System Admin' or manual", required: true },
        { field: "Subject", source: "Multiple", transformation: "Activity Details | City | Country | Customer Name", required: true },
        { field: "Site", source: "Ticket Data", transformation: "Site Address", required: true },
        { field: "Priority", source: "Ticket Data", transformation: "Ticket Priority", required: true },
        { field: "Assigned Technician", source: "Ticket Data", transformation: "Technician Name", required: true },
        { field: "Created Date", source: "Ticket Data", transformation: "Customer Ticket Created Date", required: true },
        { field: "Start Date/Time", source: "Ticket Data", transformation: "Technician IN Date + Technician IN Time", required: true },
        { field: "End Date/Time", source: "Ticket Data", transformation: "Technician OUT Date + Technician OUT Time", required: true },
        { field: "Account", source: "Ticket Data", transformation: "Customer Name", required: true },
        { field: "Region", source: "Rate Card", transformation: "Region", required: true },
        { field: "Country", source: "Ticket Data", transformation: "Country", required: true },
        { field: "City", source: "Ticket Data", transformation: "City", required: true },
        { field: "Engineer details", source: "Multiple", transformation: "Technician Name + Partner Name", required: false },
        { field: "PO NUMBER", source: "Ticket Data", transformation: "PO number", required: true },
        { field: "Revenue", source: "Calculated", transformation: "SUM of all service costs", required: true },
        { field: "Cost", source: "Calculated", transformation: "SUM of all service costs", required: true },
        { field: "Profit", source: "Calculated", transformation: "Revenue - Cost", required: true },
        { field: "Margin %", source: "Calculated", transformation: "(Profit / Revenue) * 100", required: true },
        { field: "Vendor PO", source: "Ticket Data", transformation: "[Country Code]-PO-[PO Number]", required: true },
        { field: "PRE Visit", source: "System", transformation: "Auto-set based on ETA date", required: false },
        { field: "POST Visit", source: "System", transformation: "Auto-set based on completion", required: false }
    ]
};

// Application State
let currentState = {
    smartAddActive: true,
    isDataView: false,
    currentCustomer: "hcl",
    currentAccount: "rev",
    currentSiteCategory: "",
    lastModifiedField: null,
    lastModifiedValue: null,
    smartAddCount: 0,
    autoPopulatedCount: 0,
    validationErrors: [],
    modifiedFields: new Set(),
    currentRequestId: 1001,
    // Store all data including non-existent field data
    allData: {}
};

// Enhanced Filter State
let filterState = {
    tableFilter: "SHOW_ALL",
    fieldGroup: "ALL",
    sortBy: "ALPHABETICAL_ASC",
    inputMode: "NORMAL",
    ragStatus: "ALL",
    dataType: "ALL",
    showRequiredOnly: false,
    showEmptyOnly: false,
    showTransformation: false,
    highlightMode: "NONE",
    displayOptions: "SHOW_DATA",
    displayMode: "FLAT"
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMatrix();
    setupEventListeners();
    updateFinalTablePreview();
    loadSampleData('hcl'); // Load default sample data
});

// Setup event listeners
function setupEventListeners() {
    // Search input
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchMatrix(this.value);
        }
    });

    // Smart add toggle
    document.getElementById('smartAddToggle').addEventListener('change', function() {
        currentState.smartAddActive = this.checked;
        document.getElementById('smartAddStatus').textContent = this.checked ? 'ACTIVE' : 'INACTIVE';
        if (this.checked) {
            showNotification('Smart Add Mode activated - Changes will auto-populate across tables', 'success');
        } else {
            showNotification('Smart Add Mode deactivated', 'warning');
        }
    });

    // Debounce for smart add
    let debounceTimer;
    window.addEventListener('input', function(e) {
        if (e.target.classList.contains('cell-input')) {
            const fieldName = e.target.getAttribute('data-field');
            const tableId = e.target.getAttribute('data-table');
            if (fieldName && tableId) {
                currentState.modifiedFields.add(fieldName);
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    handleCellInput(e.target);
                }, 300);
            }
        }
    });
}

// Initialize the matrix
function initializeMatrix() {
    renderMatrixHeader();
    applyFilters();
    renderMatrixBody();
    updateMatrixStats();
}

// Render matrix header
function renderMatrixHeader() {
    const header = document.getElementById('matrixHeader');
    header.innerHTML = `
        <th style="min-width: 250px;">
            <i class="fas fa-columns"></i> Field Name
            <br><span style="font-size: 0.7rem; font-weight: normal;">(ALL cells are editable - even non-existent fields)</span>
        </th>
    `;
   
    systemData.tables.forEach(table => {
        header.innerHTML += `
            <th style="background: ${table.color};">
                <i class="fas ${table.icon}"></i> ${table.name}
                <br><span style="font-size: 0.7rem; font-weight: normal;">${table.columns.length} fields</span>
            </th>
        `;
    });
}

// Enhanced renderMatrixBody function with ALL cells editable
function renderMatrixBody() {
    const body = document.getElementById('matrixBody');
    body.innerHTML = '';

    // Collect all fields from all tables
    let allFields = new Set();
    systemData.tables.forEach(table => {
        table.columns.forEach(col => {
            allFields.add(col.name);
        });
    });

    // Also include fields from sample data that might not be in table definitions
    Object.values(systemData.sampleData).forEach(customerData => {
        Object.values(customerData).forEach(accountData => {
            Object.values(accountData).forEach(tableData => {
                Object.keys(tableData).forEach(fieldName => {
                    allFields.add(fieldName);
                });
            });
        });
    });

    let fieldList = Array.from(allFields).map(fieldName => {
        const fieldData = {
            name: fieldName,
            tables: [],
            type: 'text',
            required: false,
            group: 'basic',
            rag: 'green',
            requiredForFinal: false
        };

        // Get field properties from tables that have it
        systemData.tables.forEach(table => {
            const col = table.columns.find(c => c.name === fieldName);
            if (col) {
                fieldData.type = col.type;
                fieldData.required = col.required;
                fieldData.group = col.group;
                fieldData.rag = col.rag;
                fieldData.requiredForFinal = col.requiredForFinal || false;
                fieldData.tables.push(table.id);
            }
        });

        return fieldData;
    });

    // Apply filters
    let filteredFields = fieldList.filter(field => {
        // Table filter
        if (filterState.tableFilter !== "SHOW_ALL" && filterState.tableFilter !== "FINAL_TABLE") {
            const tableMap = {
                TICKET_DATA: 1,
                RATE_CARD: 2,
                DISPATCH: 3,
                STANDBY: 4,
                DEDICATED: 5,
                SV_VISIT: 6,
                PROJECT: 7,
                FINAL_TABLE: 8
            };
            const targetId = tableMap[filterState.tableFilter];
            if (!field.tables.includes(targetId)) return false;
        }

        // Field group filter
        if (filterState.fieldGroup !== "ALL") {
            const groupMap = {
                BASIC_INFO: "basic",
                GEOGRAPHIC: "geographic",
                SERVICE: "service",
                TECHNICIAN: "technician",
                FINANCIAL: "financial",
                QUALITY: "quality",
                RATES: "rates",
                PROJECT: "project",
                STAND_BY: "stand_by",
                SYSTEM: "system"
            };
            const targetGroup = groupMap[filterState.fieldGroup] || filterState.fieldGroup.toLowerCase();
            if (field.group !== targetGroup) return false;
        }

        // RAG filter
        if (filterState.ragStatus === "REQUIRED" && !field.required) return false;
        if (filterState.ragStatus === "OPTIONAL" && field.required) return false;
        if (filterState.ragStatus === "GREEN" && field.rag !== "green") return false;
        if (filterState.ragStatus === "AMBER" && field.rag !== "amber") return false;
        if (filterState.ragStatus === "RED" && field.rag !== "red") return false;

        // Data type filter
        if (filterState.dataType !== "ALL" && field.type.toUpperCase() !== filterState.dataType) return false;

        // Required only filter
        if (filterState.showRequiredOnly && !field.required) return false;

        // Empty fields filter
        if (filterState.showEmptyOnly) {
            const hasData = field.tables.some(tableId => {
                const data = getFieldData(field.name, tableId);
                return data && data !== "—" && data !== "";
            });
            if (hasData) return false;
        }

        return true;
    });

    // Enhanced sorting
    filteredFields.sort((a, b) => {
        switch (filterState.sortBy) {
            case "ALPHABETICAL_ASC": return a.name.localeCompare(b.name);
            case "ALPHABETICAL_DESC": return b.name.localeCompare(a.name);
            case "REQUIRED_FIRST":
                return (b.required - a.required) || (b.requiredForFinal - a.requiredForFinal) || a.name.localeCompare(b.name);
            case "MANDATORY_FIRST":
                return (b.requiredForFinal - a.requiredForFinal) || (b.required - a.required) || a.name.localeCompare(b.name);
            case "FREQUENCY": return b.tables.length - a.tables.length || a.name.localeCompare(b.name);
            case "DATA_TYPE": return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
            case "FIELD_GROUP": return a.group.localeCompare(b.group) || a.name.localeCompare(b.name);
            case "LAST_MODIFIED":
                return (b.lastModified || 0) - (a.lastModified || 0) || a.name.localeCompare(b.name);
            default: return 0;
        }
    });

    // Render rows based on display mode
    if (filterState.displayMode === "GROUPED") {
        renderGroupedView(filteredFields);
    } else if (filterState.displayMode === "TABLE_WISE") {
        renderTableWiseView(filteredFields);
    } else {
        renderFlatView(filteredFields);
    }

    applyHighlighting();
    updateMatrixStats();
   
    // Add event listeners for editable cells
    addCellEditListeners();
}

// Flat view rendering with ALL cells editable
function renderFlatView(filteredFields) {
    const body = document.getElementById('matrixBody');
   
    filteredFields.forEach(field => {
        const row = document.createElement('tr');
        row.setAttribute('data-field', field.name);
        row.setAttribute('data-group', field.group);
        row.setAttribute('data-type', field.type);
        row.setAttribute('data-rag', field.rag);
        row.setAttribute('data-required', field.required);

        // Field name cell with enhanced info
        const nameCell = document.createElement('td');
        let ragClass = `rag-${field.rag}`;
        nameCell.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <strong>${field.name}</strong>
                <span style="font-size:0.7rem; color:var(--${field.rag === 'red' ? 'danger' : field.rag === 'amber' ? 'warning' : 'success'});">
                    ● ${field.rag.toUpperCase()}
                </span>
                <span style="font-size:0.7rem; color:var(--gray);">${field.group}</span>
                ${field.required ? '<span style="font-size:0.7rem; color:var(--danger);">REQUIRED</span>' : ''}
                ${field.requiredForFinal ? '<span style="font-size:0.7rem; color:var(--primary);">FINAL</span>' : ''}
            </div>
            ${filterState.showTransformation ? `<div style="font-size:0.7rem; color:var(--gray); margin-top:5px;">
                <i class="fas fa-exchange-alt"></i> ${getTransformationLogic(field.name)}
            </div>` : ''}
        `;
       
        // Add highlighting based on input mode
        if (filterState.inputMode === "FINAL_TABLE" && field.requiredForFinal) {
            nameCell.classList.add('highlight-final-table');
        } else if (field.required) {
            nameCell.classList.add('highlight-required');
        }
       
        row.appendChild(nameCell);

        // Table cells - ALL EDITABLE
        systemData.tables.forEach(table => {
            const cell = document.createElement('td');
            const hasField = field.tables.includes(table.id);
            
            // Get current data
            const data = getFieldData(field.name, table.id);
            
            // Create input for ALL cells
            if (currentState.isDataView) {
                if (filterState.displayOptions === "SHOW_TYPE") {
                    cell.innerHTML = `<div class="cell-data"><small>${field.type}</small></div>`;
                } else if (filterState.displayOptions === "SHOW_SOURCE") {
                    cell.innerHTML = `<div class="cell-data"><small>Source: ${table.name}</small></div>`;
                } else if (filterState.displayOptions === "SHOW_TRANSFORMATION") {
                    cell.innerHTML = `<div class="cell-data"><small>${getTransformationLogic(field.name)}</small></div>`;
                } else {
                    // Make ALL cells editable
                    const inputClass = hasField ? 'cell-input' : 'cell-input non-existent';
                    cell.innerHTML = `
                        <input type="text"
                               class="${inputClass}"
                               value="${data || ''}"
                               data-field="${field.name}"
                               data-table="${table.id}"
                               placeholder="${hasField ? 'Enter value...' : 'Field not in table (but editable)'}">
                        ${!hasField ? '<div class="editable-indicator"><i class="fas fa-edit"></i></div>' : ''}
                    `;
                    cell.style.cursor = 'pointer';
                    cell.style.position = 'relative';
                }
            } else {
                // Structural view - still show if field exists or not
                if (hasField) {
                    cell.innerHTML = '<div class="cell-check">✔</div>';
                    cell.className = 'cell-check';
                } else {
                    cell.innerHTML = '<div class="cell-cross">✖</div>';
                    cell.className = 'cell-cross';
                }
            }
           
            // Add data attributes for highlighting
            cell.setAttribute('data-table', table.id);
            cell.setAttribute('data-has-field', hasField);
           
            row.appendChild(cell);
        });

        body.appendChild(row);
    });
}

// Add cell edit listeners
function addCellEditListeners() {
    const cells = document.querySelectorAll('.cell-input');
    cells.forEach(cell => {
        cell.addEventListener('dblclick', function(e) {
            e.target.select();
        });
       
        cell.addEventListener('focus', function(e) {
            e.target.style.background = '#f8fafc';
        });
       
        cell.addEventListener('blur', function(e) {
            const hasField = e.target.classList.contains('non-existent') ? false : true;
            if (!hasField) {
                e.target.style.background = '#fef2f2';
            }
        });
    });
}

// Handle cell input
function handleCellInput(inputElement) {
    const fieldName = inputElement.getAttribute('data-field');
    const tableId = parseInt(inputElement.getAttribute('data-table'));
    const value = inputElement.value;
   
    // Update data
    updateFieldData(fieldName, tableId, value);
   
    // Handle smart add if active
    if (currentState.smartAddActive) {
        handleSmartAdd(fieldName, value, tableId);
    }
   
    // Update final table preview
    updateFinalTablePreview();
   
    // Update stats
    currentState.autoPopulatedCount++;
    updateMatrixStats();
}

// Get field data
function getFieldData(fieldName, tableId) {
    // First check sample data
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
   
    // Map table ID to data key
    const tableMap = {
        1: 'ticket',
        2: 'rate',
        3: 'dispatch',
        4: 'standby',
        5: 'dedicated',
        6: 'sv',
        7: 'project',
        8: 'final'
    };
   
    const dataKey = tableMap[tableId];
    const data = systemData.sampleData[customer]?.[account]?.[dataKey];
   
    if (data && data[fieldName] !== undefined) {
        return data[fieldName];
    }
   
    // Check if we have stored data for non-existent fields
    const storageKey = `${dataKey}_${fieldName}`;
    if (currentState.allData[storageKey]) {
        return currentState.allData[storageKey];
    }
   
    // Check if field exists in table
    const table = systemData.tables.find(t => t.id === tableId);
    if (table) {
        const hasField = table.columns.some(col => col.name === fieldName);
        if (!hasField) {
            return ""; // Return empty for non-existent fields
        }
    }
   
    // Generate sample data if not available
    return generateSampleData(fieldName, tableId);
}

// Update field data
function updateFieldData(fieldName, tableId, value) {
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
   
    // Map table ID to data key
    const tableMap = {
        1: 'ticket',
        2: 'rate',
        3: 'dispatch',
        4: 'standby',
        5: 'dedicated',
        6: 'sv',
        7: 'project',
        8: 'final'
    };
   
    const dataKey = tableMap[tableId];
    if (!systemData.sampleData[customer]) {
        systemData.sampleData[customer] = {};
    }
    if (!systemData.sampleData[customer][account]) {
        systemData.sampleData[customer][account] = {};
    }
    if (!systemData.sampleData[customer][account][dataKey]) {
        systemData.sampleData[customer][account][dataKey] = {};
    }
   
    systemData.sampleData[customer][account][dataKey][fieldName] = value;
   
    // Also store in allData for non-existent fields
    const storageKey = `${dataKey}_${fieldName}`;
    currentState.allData[storageKey] = value;
   
    // Show notification
    const table = systemData.tables.find(t => t.id === tableId);
    const hasField = table.columns.some(col => col.name === fieldName);
    if (!hasField) {
        showNotification(`Added "${fieldName}" to ${table.name} (custom field)`, 'info');
    } else {
        showNotification(`Updated ${fieldName} in ${table.name}`, 'success');
    }
}

// Generate sample data
function generateSampleData(fieldName, tableId) {
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
   
    // Check if we have existing data
    const tableMap = {
        1: 'ticket',
        2: 'rate',
        3: 'dispatch',
        4: 'standby',
        5: 'dedicated',
        6: 'sv',
        7: 'project',
        8: 'final'
    };
   
    const dataKey = tableMap[tableId];
    const existingData = systemData.sampleData[customer]?.[account]?.[dataKey];
   
    if (existingData && existingData[fieldName]) {
        return existingData[fieldName];
    }
   
    // Generate based on field type
    const table = systemData.tables.find(t => t.id === tableId);
    let fieldType = 'text';
    if (table) {
        const col = table.columns.find(c => c.name === fieldName);
        if (col) {
            fieldType = col.type;
        }
    }
   
    const samples = {
        "Customer Name": ["HCL Technologies", "Fresenius Medical", "Acme Corp", "Global Enterprises"],
        "Customer": ["HCL Technologies", "Fresenius Medical", "Acme Corp", "Global Enterprises"],
        "Partner Name": ["Tech Services Ltd", "MediCare Solutions", "Global Partners", "Support Solutions Inc"],
        "Supplier": ["Tech Services Ltd", "MediCare Solutions", "Global Partners", "Support Solutions Inc"],
        "Country": ["India", "Germany", "USA", "UK", "Singapore", "Australia"],
        "City": ["Bangalore", "Berlin", "New York", "London", "Singapore", "Sydney"],
        "PO number": ["INDOPO-6502", "GERPO-4501", "USAPO-7890", "UKPO-1234", "SGPO-5678"],
        "Currency": ["INR", "EUR", "USD", "GBP", "SGD", "AUD"],
        "Technician Name": ["Rajesh Kumar", "Hans Müller", "John Smith", "Sarah Chen", "David Wilson", "Maria Garcia"],
        "Total Hours": ["8", "12", "6", "10", "24", "4", "16"],
        "Rate Value": ["1200", "1500", "2000", "850", "3000"],
        "Monthly rate": ["80000", "6500", "5000", "12000", "100000"],
        "Site Category": ["Dispatch", "Dedicated", "Project", "SV Visit", "Standby"],
        "Ticket Priority": ["P1", "P2", "P3", "P4"],
        "Dispatch Category": ["4H", "SBD", "NBD", "2BD"],
        "Activity Details": ["Server Maintenance", "Equipment Calibration", "System Implementation", "Network Setup", "Software Update"],
        "Site Address": ["Electronics City, Phase 1", "Alexanderplatz 1", "Market Street 123", "Oxford Street 456", "Raffles Place 789"],
        "ETA Time": ["10:00", "14:00", "09:00", "13:30", "15:45"],
        "Remarks": ["Completed successfully", "In progress", "Pending review", "Escalated to Level 2", "Resolved"]
    };
   
    for (const [key, values] of Object.entries(samples)) {
        if (fieldName.includes(key) || key.includes(fieldName)) {
            return values[Math.floor(Math.random() * values.length)];
        }
    }
   
    // Default values based on type
    switch(fieldType) {
        case 'text': return "Sample Data";
        case 'number': return Math.floor(Math.random() * 100).toString();
        case 'currency': return (Math.random() * 1000).toFixed(2);
        case 'date': return new Date().toISOString().split('T')[0];
        case 'time': return "09:00";
        case 'datetime': return new Date().toISOString().replace('T', ' ');
        case 'boolean': return "Yes";
        case 'percentage': return "15";
        case 'dropdown': return "Option 1";
        default: return "Sample Value";
    }
}

// Handle smart add functionality
function handleSmartAdd(fieldName, value, sourceTableId) {
    if (!currentState.smartAddActive) return;
   
    // Store last modified field
    currentState.lastModifiedField = fieldName;
    currentState.lastModifiedValue = value;
   
    // Find which tables should have this field
    const mapping = systemData.fieldMapping[fieldName];
    if (!mapping) return;
   
    let tablesToUpdate = [];
    if (mapping.tables[0] === 'all') {
        tablesToUpdate = systemData.tables.filter(t => t.id !== sourceTableId);
    } else {
        // Map table names to IDs
        const tableMap = {
            'ticket': 1,
            'rate': 2,
            'dispatch': 3,
            'standby': 4,
            'dedicated': 5,
            'sv': 6,
            'project': 7,
            'final': 8
        };
       
        tablesToUpdate = mapping.tables
            .map(name => systemData.tables.find(t => t.id === tableMap[name]))
            .filter(Boolean)
            .filter(t => t.id !== sourceTableId);
    }
   
    // Update data in all relevant tables
    tablesToUpdate.forEach(table => {
        const hasField = table.columns.some(col => col.name === fieldName);
        if (hasField || mapping.tables[0] === 'all') {
            updateFieldData(fieldName, table.id, value);
        }
    });
   
    // Update UI with smart add animation
    const rows = document.querySelectorAll(`tr[data-field="${fieldName}"]`);
    rows.forEach(row => {
        const cells = row.querySelectorAll('td:not(:first-child)');
        cells.forEach(cell => {
            if (parseInt(cell.getAttribute('data-table')) !== sourceTableId) {
                cell.classList.add('highlight-smart-add');
                setTimeout(() => {
                    cell.classList.remove('highlight-smart-add');
                }, 1000);
            }
        });
    });
   
    // Show indicator
    showSmartAddIndicator(tablesToUpdate.length);
   
    // Update stats
    currentState.smartAddCount++;
    updateMatrixStats();
}

// Show smart add indicator
function showSmartAddIndicator(tableCount) {
    const indicator = document.getElementById('smartAddIndicator');
    const text = document.getElementById('smartAddText');
   
    text.textContent = `Smart Add: Updated ${tableCount} tables with "${currentState.lastModifiedField}"`;
    indicator.style.display = 'flex';
   
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 3000);
}

// Toggle matrix mode
function toggleMatrixMode() {
    currentState.isDataView = document.getElementById('matrixModeToggle').checked;
    renderMatrixBody();
    updateMatrixStats();
   
    if (currentState.isDataView) {
        showNotification('Data Preview Mode: Showing actual data from selected customer/account', 'info');
    } else {
        showNotification('Structural View Mode: Showing column existence across tables', 'info');
    }
}

// Update matrix data based on selections
function updateMatrixData() {
    currentState.currentCustomer = document.getElementById('customerSelect').value;
    currentState.currentAccount = document.getElementById('accountSelect').value;
   
    if (currentState.isDataView && currentState.currentCustomer && currentState.currentAccount) {
        renderMatrixBody();
        updateMatrixStats();
        updateFinalTablePreview();
        showNotification(`Showing data for ${currentState.currentCustomer.toUpperCase()} - ${currentState.currentAccount.toUpperCase()}`, 'success');
    }
}

// Search matrix
function searchMatrix(searchTerm) {
    if (!searchTerm) {
        // Clear highlights
        document.querySelectorAll('.highlight-column').forEach(el => {
            el.classList.remove('highlight-column');
        });
        return;
    }
   
    searchTerm = searchTerm.toLowerCase();
    const rows = document.querySelectorAll('#matrixBody tr[data-field]');
    let matchCount = 0;
   
    rows.forEach(row => {
        const fieldName = row.getAttribute('data-field').toLowerCase();
        const cells = row.querySelectorAll('td');
        let rowMatches = false;
       
        // Check field name
        if (fieldName.includes(searchTerm)) {
            rowMatches = true;
        }
       
        // Check cell contents in data view
        if (currentState.isDataView) {
            cells.forEach(cell => {
                const input = cell.querySelector('input');
                if (input) {
                    const cellText = input.value.toLowerCase();
                    if (cellText.includes(searchTerm) && cellText !== '') {
                        rowMatches = true;
                    }
                }
            });
        }
       
        // Highlight row if matches
        if (rowMatches) {
            cells.forEach(cell => {
                cell.classList.add('highlight-column');
            });
            matchCount++;
            row.style.display = '';
        } else {
            cells.forEach(cell => {
                cell.classList.remove('highlight-column');
            });
            if (currentState.currentSiteCategory) {
                row.style.display = 'none';
            }
        }
    });
   
    showNotification(`Found ${matchCount} matches for "${searchTerm}"`, 'info');
}

// Update matrix statistics
function updateMatrixStats() {
    const allFields = new Set();
    const requiredFields = new Set();
   
    systemData.tables.forEach(table => {
        table.columns.forEach(col => {
            allFields.add(col.name);
            if (col.required) {
                requiredFields.add(col.name);
            }
        });
    });
   
    // Also count custom fields from data
    Object.values(systemData.sampleData).forEach(customerData => {
        Object.values(customerData).forEach(accountData => {
            Object.values(accountData).forEach(tableData => {
                Object.keys(tableData).forEach(fieldName => {
                    allFields.add(fieldName);
                });
            });
        });
    });
   
    const totalFields = Array.from(allFields).length;
    const commonFields = Array.from(allFields).filter(field =>
        systemData.tables.every(table =>
            table.columns.some(col => col.name === field)
        )
    ).length;
   
    const uniqueFields = Array.from(allFields).filter(field =>
        systemData.tables.filter(table =>
            table.columns.some(col => col.name === field)
        ).length === 1
    ).length;
   
    document.getElementById('totalColumns').textContent = totalFields;
    document.getElementById('commonColumns').textContent = commonFields;
    document.getElementById('uniqueColumns').textContent = uniqueFields;
    document.getElementById('requiredCount').textContent = requiredFields.size;
    document.getElementById('smartAddCount').textContent = currentState.smartAddCount;
    document.getElementById('autoPopulated').textContent = currentState.autoPopulatedCount;
}

// Update final table preview
function updateFinalTablePreview() {
    const preview = document.getElementById('finalTablePreview');
    preview.innerHTML = '';
   
    systemData.finalTable.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'preview-item';
       
        // Generate value based on transformation
        let value = generateFinalTableValue(item);
       
        itemElement.innerHTML = `
            <div class="preview-field">${item.field}</div>
            <div class="preview-value">${value}</div>
            <div style="font-size: 0.7rem; color: var(--gray); margin-top: 5px;">
                <i class="fas fa-database"></i> Source: ${item.source}
                ${item.required ? '<span style="color: var(--danger); margin-left: 10px;">REQUIRED</span>' : ''}
            </div>
        `;
        preview.appendChild(itemElement);
    });
}

// Generate final table value
function generateFinalTableValue(item) {
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
    const ticketData = systemData.sampleData[customer]?.[account]?.ticket || {};
    const rateData = systemData.sampleData[customer]?.[account]?.rate || {};
    const finalData = systemData.sampleData[customer]?.[account]?.final || {};
   
    // Check if we have a direct value in final table data
    if (finalData[item.field]) {
        return finalData[item.field];
    }
   
    switch(item.field) {
        case "Request ID":
            currentState.currentRequestId++;
            return `REQ-${currentState.currentRequestId}`;
        case "Subject":
            return `${ticketData["Activity Details"] || "Service"} | ${ticketData.City || "City"} | ${ticketData.Country || "Country"} | ${ticketData["Customer Name"] || "Customer"}`;
        case "CUSTOMER REFERENCE":
            return ticketData["Customer Ticket Number"] || "—";
        case "Site":
            return ticketData["Site Address"] || "—";
        case "Account":
            return ticketData["Customer Name"] || "—";
        case "Country":
            return ticketData["Country"] || "—";
        case "City":
            return ticketData["City"] || "—";
        case "Assigned Technician":
            return ticketData["Technician Name"] || "—";
        case "PO NUMBER":
            return ticketData["PO number"] || "—";
        case "Vendor PO":
            if (ticketData["PO number"] && ticketData["Country"]) {
                const countryCode = getCountryCode(ticketData["Country"]);
                return `${countryCode}-PO-${ticketData["PO number"].split('-').pop()}`;
            }
            return "—";
        case "Region":
            return rateData["Region"] || "—";
        case "Priority":
            return ticketData["Ticket Priority"] || "—";
        case "Requester":
            return "System Admin";
        case "Created Date":
            return ticketData["Customer Ticket Created Date"] || "—";
        case "Start Date/Time":
            return `${ticketData["Technician IN Date"] || ""} ${ticketData["Technician IN Time"] || ""}`.trim() || "—";
        case "End Date/Time":
            return `${ticketData["Technician OUT Date"] || ""} ${ticketData["Technician OUT Time"] || ""}`.trim() || "—";
        case "Engineer details":
            if (ticketData["Technician Name"] && ticketData["Partner Name"]) {
                return `${ticketData["Technician Name"]} - ${ticketData["Partner Name"]}`;
            }
            return "—";
        case "PRE Visit":
            return "Yes";
        case "POST Visit":
            return "Yes";
        case "Revenue":
            return calculateRevenue();
        case "Cost":
            return calculateCost();
        case "Profit":
            return calculateProfit();
        case "Margin %":
            return calculateMargin();
        default:
            return "Auto-generated";
    }
}

// Helper functions
function getCountryCode(country) {
    const codes = {
        "India": "INDO",
        "Germany": "GER",
        "USA": "USA",
        "UK": "UK",
        "Singapore": "SG",
        "Australia": "AUS"
    };
    return codes[country] || country.substring(0, 4).toUpperCase();
}

function calculateRevenue() {
    // Simplified calculation
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
    const ticketData = systemData.sampleData[customer]?.[account]?.ticket || {};
    const totalCost = parseFloat(ticketData["Total Cost"]) || 0;
    return (totalCost * 1.2).toFixed(2); // Add 20% margin
}

function calculateCost() {
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
    const ticketData = systemData.sampleData[customer]?.[account]?.ticket || {};
    return parseFloat(ticketData["Total Cost"]) || "0.00";
}

function calculateProfit() {
    const revenue = parseFloat(calculateRevenue()) || 0;
    const cost = parseFloat(calculateCost()) || 0;
    return (revenue - cost).toFixed(2);
}

function calculateMargin() {
    const revenue = parseFloat(calculateRevenue()) || 0;
    const profit = parseFloat(calculateProfit()) || 0;
    if (revenue === 0) return "0.00";
    return ((profit / revenue) * 100).toFixed(2);
}

function getTransformationLogic(fieldName) {
    const mapping = systemData.fieldMapping[fieldName];
    if (mapping && mapping.transformation) {
        return mapping.transformation;
    }
   
    const finalField = systemData.finalTable.find(f => f.transformation.includes(fieldName) || f.field === fieldName);
    if (finalField) {
        return finalField.transformation;
    }
   
    return "Direct mapping";
}

// Load sample data
function loadSampleData(customer) {
    currentState.currentCustomer = customer;
    currentState.currentAccount = customer === 'hcl' ? 'rev' : 'prod';
   
    // Update dropdowns
    document.getElementById('customerSelect').value = customer;
    document.getElementById('accountSelect').value = currentState.currentAccount;
   
    // Render matrix with new data
    if (currentState.isDataView) {
        renderMatrixBody();
        updateFinalTablePreview();
        showNotification(`Loaded ${customer.toUpperCase()} sample data`, 'success');
    }
}

// Clear all data
function clearAllData() {
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
   
    // Clear all data for current customer/account
    ['ticket', 'rate', 'dispatch', 'standby', 'dedicated', 'sv', 'project', 'final'].forEach(tableKey => {
        if (systemData.sampleData[customer] && systemData.sampleData[customer][account]) {
            systemData.sampleData[customer][account][tableKey] = {};
        }
    });
   
    // Reset counters
    currentState.smartAddCount = 0;
    currentState.autoPopulatedCount = 0;
    currentState.allData = {};
   
    // Update display
    renderMatrixBody();
    updateMatrixStats();
    updateFinalTablePreview();
   
    showNotification('All data cleared for current customer/account', 'warning');
}

// Generate random data
function generateRandomData() {
    const customer = currentState.currentCustomer;
    const account = currentState.currentAccount;
   
    // Generate data for all tables
    systemData.tables.forEach(table => {
        if (!systemData.sampleData[customer]) {
            systemData.sampleData[customer] = {};
        }
        if (!systemData.sampleData[customer][account]) {
            systemData.sampleData[customer][account] = {};
        }
       
        const tableKey = table.key;
        if (!systemData.sampleData[customer][account][tableKey]) {
            systemData.sampleData[customer][account][tableKey] = {};
        }
       
        // Generate random data for each column
        table.columns.forEach(col => {
            const value = generateSampleData(col.name, table.id);
            systemData.sampleData[customer][account][tableKey][col.name] = value;
        });
    });
   
    // Update display
    renderMatrixBody();
    updateMatrixStats();
    updateFinalTablePreview();
   
    showNotification('Random data generated for all tables', 'success');
}

// Add quick data input
function addQuickData() {
    const fieldName = document.getElementById('quickField').value.trim();
    const value = document.getElementById('quickValue').value.trim();
    const table = document.getElementById('quickTable').value;
   
    if (!fieldName || !value) {
        showNotification('Please enter both field name and value', 'warning');
        return;
    }
   
    // Map table names to IDs
    const tableMap = {
        'all': 'all',
        'ticket': 1,
        'rate': 2,
        'dispatch': 3,
        'standby': 4,
        'dedicated': 5,
        'sv': 6,
        'project': 7,
        'final': 8
    };
   
    if (table === 'all') {
        // Update all tables
        systemData.tables.forEach(t => {
            updateFieldData(fieldName, t.id, value);
        });
    } else {
        updateFieldData(fieldName, tableMap[table], value);
    }
   
    // Clear inputs
    document.getElementById('quickField').value = '';
    document.getElementById('quickValue').value = '';
   
    // Update display
    renderMatrixBody();
    updateFinalTablePreview();
   
    showNotification(`Added ${fieldName} = ${value} to ${table}`, 'success');
}

// Toggle smart add
function toggleSmartAdd() {
    currentState.smartAddActive = document.getElementById('smartAddToggle').checked;
    document.getElementById('smartAddStatus').textContent = currentState.smartAddActive ? 'ACTIVE' : 'INACTIVE';
}

// Apply filters
function applyFilters() {
    // Update filter state from UI
    filterState.tableFilter = document.getElementById('tableFilter').value;
    filterState.fieldGroup = document.getElementById('fieldGroupFilter').value;
    filterState.sortBy = document.getElementById('sortOrder').value;
    filterState.inputMode = document.getElementById('inputMode').value;
    filterState.ragStatus = document.getElementById('ragFilter').value;
    filterState.dataType = document.getElementById('dataTypeFilter').value;
    filterState.showRequiredOnly = document.getElementById('showRequiredOnly').checked;
    filterState.showEmptyOnly = document.getElementById('showEmptyOnly').checked;
    filterState.showTransformation = document.getElementById('showTransformation').checked;

    renderMatrixBody();
    updateFinalTablePreview();
}

// Reset filters
function resetFilters() {
    document.getElementById('tableFilter').value = "SHOW_ALL";
    document.getElementById('fieldGroupFilter').value = "ALL";
    document.getElementById('sortOrder').value = "ALPHABETICAL_ASC";
    document.getElementById('inputMode').value = "NORMAL";
    document.getElementById('ragFilter').value = "ALL";
    document.getElementById('dataTypeFilter').value = "ALL";
    document.getElementById('showRequiredOnly').checked = false;
    document.getElementById('showEmptyOnly').checked = false;
    document.getElementById('showTransformation').checked = false;
    document.getElementById('highlightMode').value = "NONE";
    document.getElementById('displayOptions').value = "SHOW_DATA";
    document.getElementById('displayMode').value = "FLAT";

    Object.assign(filterState, {
        tableFilter: "SHOW_ALL",
        fieldGroup: "ALL",
        sortBy: "ALPHABETICAL_ASC",
        inputMode: "NORMAL",
        ragStatus: "ALL",
        dataType: "ALL",
        showRequiredOnly: false,
        showEmptyOnly: false,
        showTransformation: false,
        highlightMode: "NONE",
        displayOptions: "SHOW_DATA",
        displayMode: "FLAT"
    });

    renderMatrixBody();
    showNotification("All filters reset", "success");
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 2000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
   
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        ${message}
    `;
   
    document.body.appendChild(notification);
   
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
   
    // Add animation styles if not present
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// The following functions are from the previous enhanced version
// They are kept as placeholders since they were in the previous code

function applyHighlighting() {
    filterState.highlightMode = document.getElementById('highlightMode').value;
    const rows = document.querySelectorAll('#matrixBody tr');
   
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const fieldName = row.getAttribute('data-field');
       
        cells.forEach(cell => {
            // Remove all highlighting classes
            cell.classList.remove('highlight-column', 'highlight-duplicate', 'highlight-match', 
                                 'highlight-smart-add', 'highlight-required', 'highlight-final-table',
                                 'validation-error', 'validation-success');
           
            const hasField = cell.getAttribute('data-has-field') === 'true';
            const tableId = cell.getAttribute('data-table');
           
            switch(filterState.highlightMode) {
                case 'SOURCE_TABLE':
                    if (tableId === '1') cell.classList.add('highlight-column');
                    break;
                case 'REQUIRED_STATUS':
                    if (row.getAttribute('data-required') === 'true') {
                        cell.classList.add('highlight-required');
                    }
                    break;
                case 'RAG_STATUS':
                    const rag = row.getAttribute('data-rag');
                    if (rag === 'red') cell.style.borderLeft = '3px solid var(--danger)';
                    else if (rag === 'amber') cell.style.borderLeft = '3px solid var(--warning)';
                    else if (rag === 'green') cell.style.borderLeft = '3px solid var(--success)';
                    break;
                case 'NON_EXISTENT':
                    if (!hasField) {
                        cell.classList.add('validation-error');
                    }
                    break;
                case 'EMPTY':
                    const input = cell.querySelector('input');
                    if (input && (!input.value || input.value.trim() === '')) {
                        cell.classList.add('validation-error');
                    }
                    break;
            }
        });
    });
}

function applyDisplayOptions() {
    filterState.displayOptions = document.getElementById('displayOptions').value;
    applyFilters();
}

function applyDisplayMode() {
    filterState.displayMode = document.getElementById('displayMode').value;
    applyFilters();
}

function handleInputMode() {
    const inputMode = document.getElementById('inputMode').value;
    filterState.inputMode = inputMode;
   
    // Show/hide site category filter
    const siteCategoryGroup = document.getElementById('siteCategoryGroup');
    if (inputMode === "SITE_CATEGORY") {
        siteCategoryGroup.style.display = 'block';
    } else {
        siteCategoryGroup.style.display = 'none';
    }
   
    applyFilters();
   
    const modeNames = {
        'NORMAL': 'Normal Mode',
        'FINAL_TABLE': 'Final Table Centric Mode',
        'TABLE_SPECIFIC': 'Table-Specific Mode',
        'SITE_CATEGORY': 'Site Category Based Mode',
        'BULK': 'Smart Bulk Input Mode',
        'VALIDATION_FIRST': 'Validation-First Mode'
    };
   
    showNotification(`${modeNames[inputMode]} activated`, 'info');
}

function filterBySiteCategory() {
    currentState.currentSiteCategory = document.getElementById('siteCategory').value;
    applyFilters();
    showNotification(`Filtering by Site Category: ${currentState.currentSiteCategory}`, 'info');
}

function showBulkInputModal() {
    document.getElementById('bulkInputModal').classList.add('active');
}

function closeBulkInputModal() {
    document.getElementById('bulkInputModal').classList.remove('active');
}

function processBulkInput() {
    const textarea = document.getElementById('bulkTextarea');
    const lines = textarea.value.split('\n').filter(line => line.trim());
   
    let processedCount = 0;
    lines.forEach(line => {
        const parts = line.split(',').map(part => part.trim());
        if (parts.length >= 2) {
            const fieldName = parts[0];
            const value = parts[1];
            const tables = parts[2] || 'all';
           
            updateFieldWithBulkInput(fieldName, value, tables);
            processedCount++;
        }
    });
   
    showNotification(`Processed ${processedCount} records from bulk input`, 'success');
    closeBulkInputModal();
    renderMatrixBody();
    updateFinalTablePreview();
}

function updateFieldWithBulkInput(fieldName, value, tables) {
    let tableList = [];
    if (tables === 'all') {
        tableList = systemData.tables.map(t => t.id);
    } else {
        const tableMap = {
            'ticket': 1, 'rate': 2, 'dispatch': 3,
            'standby': 4, 'dedicated': 5, 'sv': 6, 
            'project': 7, 'final': 8
        };
        tableList = tables.split(';').map(name => tableMap[name.trim()]).filter(Boolean);
    }
   
    tableList.forEach(tableId => {
        updateFieldData(fieldName, tableId, value);
    });
}

function exportToExcel() {
    const data = collectExportData();
    const csv = convertToCSV(data);
    downloadCSV(csv, 'ticket_system_export.csv');
    showNotification('Excel export generated successfully', 'success');
}

function exportToPDF() {
    showNotification('PDF export feature would be implemented with jsPDF library', 'info');
}

function exportValidationReport() {
    const report = generateValidationReport();
    const csv = convertToCSV(report);
    downloadCSV(csv, 'validation_report.csv');
    showNotification('Validation report exported', 'success');
}

function collectExportData() {
    const data = [];
    const rows = document.querySelectorAll('#matrixBody tr[data-field]');
   
    rows.forEach(row => {
        const fieldName = row.getAttribute('data-field');
        const rowData = { 'Field Name': fieldName };
       
        systemData.tables.forEach((table, index) => {
            const cell = row.querySelector(`td:nth-child(${index + 2})`);
            const input = cell?.querySelector('input');
            if (input) {
                rowData[table.name] = input.value || '';
            } else {
                rowData[table.name] = cell?.textContent.trim() || '';
            }
        });
       
        data.push(rowData);
    });
   
    return data;
}

function convertToCSV(data) {
    if (data.length === 0) return '';
   
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
   
    data.forEach(row => {
        const values = headers.map(header => {
            const value = row[header];
            return `"${value ? value.toString().replace(/"/g, '""') : ''}"`;
        });
        csvRows.push(values.join(','));
    });
   
    return csvRows.join('\n');
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function validateAllFields() {
    currentState.validationErrors = [];
    const requiredFields = [];
   
    systemData.tables.forEach(table => {
        table.columns.forEach(col => {
            if (col.required) {
                requiredFields.push({
                    name: col.name,
                    table: table.name,
                    tableId: table.id
                });
            }
        });
    });
   
    requiredFields.forEach(field => {
        const data = getFieldData(field.name, field.tableId);
        if (!data || data === "" || data === "—") {
            currentState.validationErrors.push({
                field: field.name,
                table: field.table,
                message: `Required field "${field.name}" is empty in ${field.table}`
            });
        }
    });
   
    updateValidationDisplay();
   
    if (currentState.validationErrors.length === 0) {
        showNotification('All required fields are valid!', 'success');
    } else {
        showNotification(`Found ${currentState.validationErrors.length} validation errors`, 'danger');
    }
}

function updateValidationDisplay() {
    const rows = document.querySelectorAll('#matrixBody tr[data-field]');
   
    rows.forEach(row => {
        const fieldName = row.getAttribute('data-field');
        const isError = currentState.validationErrors.some(error => error.field === fieldName);
       
        if (isError) {
            row.classList.add('validation-error');
            row.classList.remove('validation-success');
        } else {
            row.classList.add('validation-success');
            row.classList.remove('validation-error');
        }
    });
}

function generateValidationReport() {
    return currentState.validationErrors.map(error => ({
        'Field Name': error.field,
        'Table': error.table,
        'Status': 'ERROR',
        'Message': error.message,
        'Timestamp': new Date().toISOString()
    }));
}

function toggleAdvancedFilters() {
    const panel = document.getElementById('advancedFilters');
    panel.classList.toggle('active');
}

function downloadTemplate() {
    const template = `Field Name,Value,Tables
Site Category,Dispatch,ticket;dispatch;sv
Customer Name,HCL Technologies,all
Country,India,all
PO number,INDOPO-6502,ticket;dispatch;dedicated;sv
Technician Name,Rajesh Kumar,ticket;dispatch;sv;dedicated
Currency,INR,all
Ticket Priority,P1,ticket;dispatch;sv`;

    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bulk_input_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
   
    showNotification('Template downloaded successfully', 'success');
}

function renderGroupedView(filteredFields) {
    const body = document.getElementById('matrixBody');
    const groups = {};
   
    filteredFields.forEach(field => {
        if (!groups[field.group]) {
            groups[field.group] = [];
        }
        groups[field.group].push(field);
    });
   
    Object.keys(groups).forEach(groupName => {
        const headerRow = document.createElement('tr');
        headerRow.className = 'group-header';
        const headerCell = document.createElement('td');
        headerCell.colSpan = systemData.tables.length + 1;
        headerCell.innerHTML = `
            <div style="background: var(--light); padding: 10px; border-radius: 6px; font-weight: 600;">
                <i class="fas fa-folder"></i> ${groupName.toUpperCase()}
                <span style="font-size: 0.8rem; color: var(--gray); margin-left: 10px;">
                    ${groups[groupName].length} fields
                </span>
            </div>
        `;
        headerRow.appendChild(headerCell);
        body.appendChild(headerRow);
       
        groups[groupName].forEach(field => {
            const row = document.createElement('tr');
            row.setAttribute('data-field', field.name);
           
            const nameCell = document.createElement('td');
            nameCell.innerHTML = `<strong>${field.name}</strong>`;
            row.appendChild(nameCell);
           
            systemData.tables.forEach(table => {
                const cell = document.createElement('td');
                const hasField = field.tables.includes(table.id);
                const data = getFieldData(field.name, table.id);
                
                if (currentState.isDataView) {
                    const inputClass = hasField ? 'cell-input' : 'cell-input non-existent';
                    cell.innerHTML = `
                        <input type="text"
                               class="${inputClass}"
                               value="${data || ''}"
                               data-field="${field.name}"
                               data-table="${table.id}"
                               placeholder="${hasField ? 'Enter value...' : 'Field not in table'}">
                        ${!hasField ? '<div class="editable-indicator"><i class="fas fa-edit"></i></div>' : ''}
                    `;
                    cell.style.position = 'relative';
                } else {
                    cell.innerHTML = hasField ? '<div class="cell-check">✔</div>' : '<div class="cell-cross">✖</div>';
                    cell.className = hasField ? 'cell-check' : 'cell-cross';
                }
               
                cell.setAttribute('data-table', table.id);
                cell.setAttribute('data-has-field', hasField);
                row.appendChild(cell);
            });
           
            body.appendChild(row);
        });
    });
}

function renderTableWiseView(filteredFields) {
    // Similar to grouped view but by table
    renderFlatView(filteredFields);
}

// Initialize with sample data
setTimeout(() => {
    updateMatrixData();
    showNotification('Enhanced Matching Matrix loaded successfully! ALL cells are editable.', 'success');
}, 500);





document.addEventListener("DOMContentLoaded", function () {

    /* ===== COLUMN DEFINITIONS ===== */
    const columns = [
        "Request ID","CUSTOMER REFERENCE","Requester","Subject","Site","Priority",
        "Assigned Technician","Created Date","Start Date/Time","End Date/Time",
        "Account","Region","Country","City","Engineer details","PO NUMBER",
        "Revenue","Cost","Profit","Margin %","Vendor PO","PRE Visit","POST Visit"
    ];

    /* ===== STATIC SAMPLE DATA ===== */
    const sampleData = [
        {
            "Request ID":"REQ-1001",
            "CUSTOMER REFERENCE":"CUST-7782",
            "Requester":"John Smith",
            "Subject":"Network Outage",
            "Site":"Data Center A",
            "Priority":"High",
            "Assigned Technician":"Alice Brown",
            "Created Date":"2025-09-01",
            "Start Date/Time":"2025-09-01 10:00",
            "End Date/Time":"2025-09-01 14:30",
            "Account":"Enterprise",
            "Region":"EMEA",
            "Country":"UK",
            "City":"London",
            "Engineer details":"Cisco Certified",
            "PO NUMBER":"PO-556677",
            "Revenue":"$12,000",
            "Cost":"$7,500",
            "Profit":"$4,500",
            "Margin %":"37.5%",
            "Vendor PO":"VPO-8899",
            "PRE Visit":"Yes",
            "POST Visit":"Yes"
        },
        {
            "Request ID":"REQ-1002",
            "CUSTOMER REFERENCE":"CUST-8811",
            "Requester":"Maria Garcia",
            "Subject":"Server Installation",
            "Site":"Office HQ",
            "Priority":"Medium",
            "Assigned Technician":"David Lee",
            "Created Date":"2025-09-02",
            "Start Date/Time":"2025-09-02 09:00",
            "End Date/Time":"2025-09-02 17:00",
            "Account":"Corporate",
            "Region":"APAC",
            "Country":"Singapore",
            "City":"Singapore",
            "Engineer details":"VMware Specialist",
            "PO NUMBER":"PO-998877",
            "Revenue":"$20,000",
            "Cost":"$13,000",
            "Profit":"$7,000",
            "Margin %":"35%",
            "Vendor PO":"VPO-5544",
            "PRE Visit":"No",
            "POST Visit":"Yes"
        }
    ];

    /* ===== TABLE RENDER (NON-DESTRUCTIVE) ===== */
    const tableHeader = document.getElementById("tableHeader");
    const tableBody = document.getElementById("tableBody");

    if (tableHeader && tableBody) {
        tableHeader.innerHTML =
            "<tr>" + columns.map(col => `<th>${col}</th>`).join("") + "</tr>";

        tableBody.innerHTML = sampleData.map(row =>
            "<tr>" + columns.map(col => `<td>${row[col] || "-"}</td>`).join("") + "</tr>"
        ).join("");
    }

    /* ===== SUMMARY CARDS ===== */
    document.getElementById("totalCount").textContent = sampleData.length;
    document.getElementById("validCount").textContent = sampleData.length;
    document.getElementById("warningCount").textContent = 0;
    document.getElementById("errorCount").textContent = 0;

    /* ===== FORM VIEW ===== */
    let currentIndex = 0;
    const ticketForm = document.getElementById("ticketForm");
    const currentTicketIndex = document.getElementById("currentTicketIndex");
    const totalTicketsForm = document.getElementById("totalTicketsForm");

    totalTicketsForm.textContent = sampleData.length;

    function renderForm() {
        const ticket = sampleData[currentIndex];
        currentTicketIndex.textContent = currentIndex + 1;

        ticketForm.innerHTML = columns.map(col => `
            <div class="form-row">
                <strong>${col}:</strong> ${ticket[col] || "-"}
            </div>
        `).join("");
    }

    renderForm();

    document.getElementById("prevTicket").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderForm();
        }
    });

    document.getElementById("nextTicket").addEventListener("click", () => {
        if (currentIndex < sampleData.length - 1) {
            currentIndex++;
            renderForm();
        }
    });

    /* ===== VIEW TOGGLE (TABLE / FORM) ===== */
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            document.getElementById("tableView").classList.remove("active");
            document.getElementById("formView").classList.remove("active");

            document.getElementById(btn.dataset.view + "View").classList.add("active");
        });
    });

});



document.addEventListener("DOMContentLoaded", () => {

    // Delay to ensure tab content exists
    setTimeout(initMatrix, 0);

});

function initMatrix() {

    const tableHeader = document.getElementById("tableHeader");
    const tableBody = document.getElementById("tableBody");

    if (!tableHeader || !tableBody) {
        console.warn("Matrix table not found in DOM");
        return;
    }

    /* ===== COLUMNS ===== */
    const columns = [
        "Request ID",
        "CUSTOMER REFERENCE",
        "Requester",
        "Subject",
        "Site",
        "Priority",
        "Assigned Technician",
        "Request Status",
        "Worklog Type",
        "Created Time (UK time)",
        "Time Spent Starttime (UK time)",
        "Time Spent Endtime (UK time)",
        "Time Spent",
        "Completed Time (UK time)",
        "Resolved Time (UK time)",
        "Account",
        "REGION OF THE COUNTRY",
        "Country",
        "CITY OR TOWN",
        "FIELD ENGINEERS RESOLVER",
        "Engineer details",
        "External PO NUMBER",
        "Total Revenue",
        "Total labor Cost",
        "Profit",
        "Margin in %",
        "Vendor PO",
        "PRE Visit",
        "POST Visit"
    ];

    /* ===== SAMPLE DATA ===== */
    const sampleData = [ /* your data here (unchanged) */ ];

    /* ===== RENDER TABLE ===== */
    tableHeader.innerHTML =
        "<tr>" + columns.map(c => `<th>${c}</th>`).join("") + "</tr>";

    tableBody.innerHTML = sampleData.map(row =>
        "<tr>" + columns.map(c => `<td>${row[c] ?? "-"}</td>`).join("") + "</tr>"
    ).join("");

    /* ===== SUMMARY ===== */
    document.getElementById("totalCount").textContent = sampleData.length;
    document.getElementById("validCount").textContent = sampleData.length;
    document.getElementById("warningCount").textContent = 0;
    document.getElementById("errorCount").textContent = 0;

    /* ===== FORM VIEW ===== */
    let currentIndex = 0;
    const ticketForm = document.getElementById("ticketForm");
    const currentTicketIndex = document.getElementById("currentTicketIndex");
    const totalTicketsForm = document.getElementById("totalTicketsForm");

    totalTicketsForm.textContent = sampleData.length;

    function renderForm() {
        const ticket = sampleData[currentIndex];
        currentTicketIndex.textContent = currentIndex + 1;

        ticketForm.innerHTML = columns.map(col => `
            <div class="form-row">
                <strong>${col}:</strong> ${ticket[col] ?? "-"}
            </div>
        `).join("");
    }

    renderForm();

    document.getElementById("prevTicket").onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderForm();
        }
    };

    document.getElementById("nextTicket").onclick = () => {
        if (currentIndex < sampleData.length - 1) {
            currentIndex++;
            renderForm();
        }
    };

    /* ===== VIEW TOGGLE ===== */
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            document.getElementById("tableView").classList.remove("active");
            document.getElementById("formView").classList.remove("active");

            document.getElementById(btn.dataset.view + "View").classList.add("active");
        });
    });
}
