import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import React from "react";
import { Button } from "flowbite-react";
const ExploreModels = () => {
  return (
    <div className="exploreModels" id="homeModels">
      <p>
        <strong>EXPLORE MODELS:</strong>
      </p>
      <hr />
      <br />
      <div className="overflow-x-auto">
        <Table>
          <TableHead>
            <TableHeadCell>MODEL TYPES : </TableHeadCell>
            <TableHeadCell style={{ display: "flex", gap: "1rem" }}>
              <Button color="dark">
                <strong>3D MODELS</strong>
              </Button>
              <Button gradientMonochrome="pink">
                <strong>2D MODELS</strong>
              </Button>

              <Button gradientMonochrome="purple">
                <strong>GRAPHICAL MODELS</strong>
              </Button>
            </TableHeadCell>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableHead>

          <TableHead>
            <TableHeadCell>Topics</TableHeadCell>
            <TableHeadCell>Model</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableHead>

          <TableBody className="divide-y">
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {""}
                <Button gradientDuoTone="redToYellow">
                  <strong>Forensic Pathology</strong>
                </Button>
              </TableCell>
              <TableCell>
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Toxicology
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Injury & Wound Analysis
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Forensic Odontology
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>
              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>{" "}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                DNA & Serology
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Ballistics & Firearms
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>{" "}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Forensic Psychiatry
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>{" "}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Forensic Anthropology
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>{" "}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Document Examination
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>{" "}
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Forensic Entomology
              </TableCell>
              <TableCell>
                {" "}
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1738253317/Screenshot_2025-01-30_at_9.38.11_PM_s2cmi4.png"
                  alt=""
                />
              </TableCell>
              <TableCell>
                <p>
                  <strong>Dentum lorem this taht </strong>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ipsum dolores, nobis deleniti aspernatur magni quas
                ratione quae reiciendis omnis laboriosam incidunt soluta eius
                natus harum cupiditate, voluptatum velit rerum!
              </TableCell>

              <TableCell>
                <a
                  href="/modelpage"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  <Button color="dark">&rarr;</Button>
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ExploreModels;
