const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Workout = require("../models/workoutModel");

beforeEach(async () => {
  await Workout.deleteMany({});
  let workoutObject = new Workout(initialWorkouts[0]);
  await workoutObject.save();
  workoutObject = new Workout(initialWorkouts[1]);
  await workoutObject.save();
});

afterAll(() => {
  mongoose.connection.close();
});

const initialWorkouts = [
  {
    title: "test workout 1",
    reps: 11,
    load: 101,
  },
  {
    title: "test workout 2",
    reps: 12,
    load: 102,
  },
];

const workoutsInDb = async () => {
  const workouts = await Workout.find({});
  return workouts.map((workout) => workout.toJSON());
};

// describe("when there is initially some notes saved", () => {
//   it("should return all workouts", async () => {
//     const response = await api.get("/api/workouts");

//     expect(response.body).toHaveLength(initialWorkouts.length);
//   });

//   it("should include a specific workout in the returned list", async () => {
//     const response = await api.get("/api/workouts");

//     const contents = response.body.map((r) => r.title);
//     expect(contents).toContain("test workout 2");
//   });

//   it("should return workout as json with status 200", async () => {
//     await api
//       .get("/api/workouts")
//       .expect(200)
//       .expect("Content-Type", /application\/json/);
//   });

//   it("should add new workout and return status 201", async () => {
//     const newWorkout = {
//       title: "test workout x",
//       reps: 19,
//       load: 109,
//     };
//     await api.post("/api/workouts").send(newWorkout).expect(201);
//   });

//   it("should add a valid workout and include it in subsequent GET", async () => {
//     const newWorkout = {
//       title: "Situps",
//       reps: 25,
//       load: 10,
//     };

//     await api
//       .post("/api/workouts")
//       .send(newWorkout)
//       .expect(201)
//       .expect("Content-Type", /application\/json/);

//     const response = await api.get("/api/workouts");

//     const contents = response.body.map((r) => r.title);

//     expect(response.body).toHaveLength(initialWorkouts.length + 1);
//     expect(contents).toContain("Situps");
//   });

//   it("should reject a workout missing a title with status 400", async () => {
//     const newWorkout = {
//       reps: 23,
//     };

//     await api.post("/api/workouts").send(newWorkout).expect(400);

//     const response = await api.get("/api/workouts");

//     expect(response.body).toHaveLength(initialWorkouts.length);
//   });
// });

//GET 

describe("GET /api/workouts", () => {
  it("should return all workouts", async () => {
    const response = await api.get("/api/workouts");
    expect(response.body).toHaveLength(initialWorkouts.length);
  });

  it("should return workouts as JSON with status 200", async () => {
    await api
      .get("/api/workouts")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("should include a specific workout in the returned list", async () => {
    const response = await api.get("/api/workouts");
    const contents = response.body.map((r) => r.title);
    expect(contents).toContain("test workout 2");
  });
});

//POST

describe("POST /api/workouts", () => {
  describe("when the payload is valid", () => {
    it("should return status 201 and JSON", async () => {
      const newWorkout = { title: "Situps", reps: 25, load: 10 };
      await api
        .post("/api/workouts")
        .send(newWorkout)
        .expect(201)
        .expect("Content-Type", /application\/json/);
    });

    it("should persist the new workout in the database", async () => {
      const newWorkout = { title: "Situps", reps: 25, load: 10 };
      await api.post("/api/workouts").send(newWorkout).expect(201);

      const response = await api.get("/api/workouts");
      const contents = response.body.map((r) => r.title);
      expect(response.body).toHaveLength(initialWorkouts.length + 1);
      expect(contents).toContain("Situps");
    });
  });

  describe("when the payload is invalid", () => {
    it("should return status 400 when title is missing", async () => {
      const newWorkout = { reps: 23 };
      await api.post("/api/workouts").send(newWorkout).expect(400);
    });

    it("should not increase the number of workouts when title is missing", async () => {
      const newWorkout = { reps: 23 };
      await api.post("/api/workouts").send(newWorkout);
      const response = await api.get("/api/workouts");
      expect(response.body).toHaveLength(initialWorkouts.length);
    });
  });
});

// describe("deletion of a workout", () => {
//   it("should delete the workout and return status 204 when the id is valid", async () => {
//     const workoutsAtStart = await workoutsInDb();
//     const workoutToDelete = workoutsAtStart[0];

//     await api.delete(`/api/workouts/${workoutToDelete.id}`).expect(204);

//     const workoutsAtEnd = await workoutsInDb();
//     expect(workoutsAtEnd).toHaveLength(initialWorkouts.length - 1);

//     const contents = workoutsAtEnd.map((r) => r.title);
//     expect(contents).not.toContain(workoutToDelete.title);
//   });
// });


//DELETE




describe("DELETE /api/workouts/:id", () => {
  describe("when the id is valid", () => {
    // it.only("should return workouts as JSON with status 200", async () => {
    //   await api
    //     .get("/api/workouts")
    //     .expect(200)
    //     .expect("Content-Type", /application\/json/);
    // });
    it("should return status 204", async () => {
      const workoutsAtStart = await workoutsInDb();
      const workoutToDelete = workoutsAtStart[0];
      await api.delete(`/api/workouts/${workoutToDelete.id}`).expect(204);
    });

    it("should remove the workout from the database", async () => {
      const workoutsAtStart = await workoutsInDb();
      const workoutToDelete = workoutsAtStart[0];

      await api.delete(`/api/workouts/${workoutToDelete.id}`);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(initialWorkouts.length - 1);

      const contents = workoutsAtEnd.map((r) => r.title);
      expect(contents).not.toContain(workoutToDelete.title);
    });
  });
});

