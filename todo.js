const todos = [
  {
      title: "Cake Baker",
      description: "Cake Bakers are specialists in the preparation and presentation of cakes.",
      priority: 1,
      created_date: "03-02-2022",
      deadline_date: "03-02-2022",
      status: "completed",
      labels: ["important", "confirmed"],
      client: {
          name: "Bob",
          email: "abc@gmail.com",
          mobile: 9876543210,
      },
  },
  {
      title: "Maruti Suzuki",
      description: "Maruti Suzuki is credited with having ushered in the automobile revolution in the country.",
      priority: 2,
      created_date: "05-02-2022",
      deadline_Date: "10-02-2022",
      status: "pending",
      labels: ["bug", "docs", "feature"],
      client: {
          name: "Bunny",
          email: "pqr@gmail.com",
          mobile: 9876543210,
      }
  },
  {
      title: "Honda",
      description: "Honda has been the world's largest motorcycle manufacturer since 1959.",
      priority: 3,
      created_date: "07-02-2022",
      deadline_Date: "07-02-2022",
      status: "completed",
      labels: ["important", "confirmed"],
      client: {
          name: "Alien",
          email: "xyz@gmail.com",
          mobile: 9876543210,
      },
  }
];

function initilize() {
  console.log('Initializing');
  renderTable();
}

// initilize
initilize();

function renderTable() {
  let table = document.getElementById("mytable");
  table.innerHTML = `
      <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
      </tr>
  `;

  todos.forEach((todo, index) => {
      let row = table.insertRow(index + 1);

      // Name Column
      let title = row.insertCell();
      title.innerHTML = todo.title;

      // Description Column
      let description = row.insertCell();
      description.innerHTML = todo.description;

      // Action Column
      let action = row.insertCell();
      action.innerHTML = `
          <button onclick = "remove(${index})">Delete</button>
          <button onclick = "select(${index})">Edit</button>
      `;
  })
}

function add() {
  let todo = {
      title: document.getElementById("input_title").value,
      description: document.getElementById("input_description").value,
      priority: document.getElementById("input_priority").value,
      created_date: new Date(),
      deadline_date: document.getElementById("input_deadline_date").value,
      status: document.getElementById("input_status").value,
      labels: document.getElementById("input_labels").value,
      client: {
          name: document.getElementById("input_client_name").value,
          email: document.getElementById("input_client_email").value,
          mobile: document.getElementById("input_client_mobile").value
      },

  }
  // get values from form.
  todos.push(todo);
  renderTable();
}

function remove(index) {
  todos.splice(index, 1);
  renderTable();
}

function select(index) {
  document.getElementById("btn_add").style.display = "none";
  document.getElementById("btn_update").style.display = "block";
  let todo = todos[index];
  document.getElementById("input_title").value = todo.title;
  document.getElementById("input_description").value = todo.description;
  document.getElementById("input_priority").value = todo.priority;
  document.getElementById("input_deadline_date").value = todo.deadline_date;
  document.getElementById("input_status").value = todo.status;
  document.getElementById("input_labels").value = todo.labels;
  document.getElementById("input_client_name").value = todo.client.name;
  document.getElementById("input_client_email").value = todo.client.email;
  document.getElementById("input_client_mobile").value = todo.client.mobile;
  document.getElementById("input_index").value = index;
}


function update() {
  const index = document.getElementById("input_index").value;
  todos[index].title = document.getElementById("input_title").value;
  todos[index].description = document.getElementById("input_description").value;
  todos[index].priority = document.getElementById("input_priority").value;
  todos[index].deadline_date = document.getElementById("input_deadline_date").value;
  todos[index].status = document.getElementById("input_status").value;
  todos[index].labels = document.getElementById("input_labels").value;
  todos[index].client.name = document.getElementById("input_client_name").value;
  todos[index].client.email = document.getElementById("input_client_email").value;
  todos[index].client.mobile = document.getElementById("input_client_mobile").value;
  todos[index].index = document.getElementById("input_index").value;

  renderTable();
  document.getElementById("input_title").value = "";
  document.getElementById("input_description").value = "";
  document.getElementById("input_priority").value = "";
  document.getElementById("input_deadline_date").value = "";
  document.getElementById("input_status").value = "";
  document.getElementById("input_labels").value = "";
  document.getElementById("input_client_name").value = "";
  document.getElementById("input_client_email").value = "";
  document.getElementById("input_client_mobile").value = "";
}
