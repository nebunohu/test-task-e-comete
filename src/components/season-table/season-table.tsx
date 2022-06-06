import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Stack,
  Table,
  Container,
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import { TEpisode } from '../../types';
import sortByKey from '../../utils/sort-by-key';

// Styles
import styles from './season-table.module.scss';

type TSeasonTableProps = {
  list: Array<TEpisode>;
  index: number;
};

const SeasonTable: FC<TSeasonTableProps> = ({ list, index }) => {
  const [sortedByFlag, setSortedByFlag] = useState({
    id: true,
    name: false,
    air_date: false,
    episode: false,
    count: false,
  });
  const [sortedList, setSortedList] = useState(list);
  const [formState, setFormState] = useState({
    id: true,
    name: true,
    air_date: true,
    episode: true,
    count: true,
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

  const sortById = () => {
    setSortedList(() => sortByKey(list, 'id'));
    setSortedByFlag({
      id: true,
      name: false,
      air_date: false,
      episode: false,
      count: false,
    });
  };

  const sortByName = () => {
    setSortedList(() => sortByKey(list, 'name'));
    setSortedByFlag({
      id: false,
      name: true,
      air_date: false,
      episode: false,
      count: false,
    });
  };

  const sortByDate = () => {
    setSortedList(() => sortByKey(list, 'air_date'));
    setSortedByFlag({
      id: false,
      name: false,
      air_date: true,
      episode: false,
      count: false,
    });
  };

  const sortByEpisode = () => {
    setSortedList(() => sortByKey(list, 'episode'));
    setSortedByFlag({
      id: false,
      name: false,
      air_date: false,
      episode: true,
      count: false,
    });
  };

  const sortByCharactersCount = () => {
    setSortedList(() => sortByKey(list, 'count'));
    setSortedByFlag({
      id: false,
      name: false,
      air_date: false,
      episode: false,
      count: true,
    });
  };

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    setFormState({ ...formState, [name]: checked });
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (searchInputRef.current) {
    let filteredList = list.filter((episode) => {
      const value = searchInputRef.current?.value as string;
      return episode.name.toLowerCase().includes(value.toLowerCase());
    });
    // console.log(filteredList);
    type keys = keyof typeof sortedByFlag;
    for () {
      if (sortedByFlag[key]) {
        filteredList = sortByKey(filteredList, key);
        break;
      }
    }

    setSortedList(filteredList);
    // }
  };

  return (
    <Container>
      <h1>
        {`Season ${index + 1}`}
      </h1>
      <div className="mb-3">
        Show columns:
        <Form
          className="mt-1"
          onSubmit={onFormSubmit}
        >
          <Row>
            <Col>
              <Stack
                direction="horizontal"
                gap={5}
              >
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Id"
                    name="id"
                    defaultChecked={formState.id}
                    onChange={onFormChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Name"
                    name="name"
                    defaultChecked={formState.name}
                    onChange={onFormChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Air date"
                    name="air_date"
                    defaultChecked={formState.air_date}
                    onChange={onFormChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Episode"
                    name="episode"
                    defaultChecked={formState.episode}
                    onChange={onFormChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Characters count"
                    name="count"
                    defaultChecked={formState.count}
                    onChange={onFormChange}
                  />
                </Form.Group>
              </Stack>
            </Col>
            <Col>
              <Stack
                className="my-2"
                direction="horizontal"
                gap={2}
              >
                <Form.Group>
                  <Form.Control type="text" placeholder="Search" ref={searchInputRef} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Find
                </Button>
              </Stack>
            </Col>
          </Row>
        </Form>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {formState.id && (
              <td
                className={`${styles.idCell} ${styles.headerCell}`}
                onClick={sortById}
              >
                Id
                {sortedByFlag.id && (
                  <i className="bi-sort-down-alt mx-2" />
                )}
              </td>
            )}
            {formState.name && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByName}
              >
                Name
                {sortedByFlag.name && (
                  <i className="bi-sort-down-alt mx-2" />
                )}
              </td>
            )}
            {formState.air_date && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByDate}
              >
                Air date
                {sortedByFlag.air_date && (
                  <i className="bi-sort-down-alt mx-2" />
                )}
              </td>
            )}
            {formState.episode && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByEpisode}
              >
                Episode
                {sortedByFlag.episode && (
                  <i className="bi-sort-down-alt mx-2" />
                )}
              </td>
            )}
            {formState.count && (
              <td
                className={`${styles.headerCell}`}
                onClick={sortByCharactersCount}
              >
                Characters count
                {sortedByFlag.count && (
                  <i className="bi-sort-down-alt mx-2" />
                )}
              </td>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedList.map((ep) => {
            return (
              <tr key={ep.id}>
                {formState.id && (
                  <td className={`${styles.idCell}`}>
                    <Link to={`/episode/${ep.id}`}>{ep.id}</Link>
                  </td>
                )}
                {formState.name && (
                  <td>
                    {ep.name}
                  </td>
                )}
                {formState.air_date && (
                  <td>
                    {ep.air_date}
                  </td>
                )}
                {formState.episode && (
                  <td>
                    {ep.episode}
                  </td>
                )}
                {formState.count && (
                  <td>
                    {ep.characters.length}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default SeasonTable;
