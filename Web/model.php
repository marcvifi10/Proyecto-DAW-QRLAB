<?php
abstract class Model
{
	protected $taula_actual = "";
	protected $connection = "";

	public function getTaulaActual()
	{
		return $this->taula_actual;
	}
	public function setTaulaActual($var)
	{
		$this->taula_actual = $var;
	}
	public function getAll()
	{
		try
		{
			$query = "
				SELECT *
				FROM  " . $this->taula_actual . "
				";
			$result = array();
			$query_result = $this->connection->query($query);
			while($query_row = mysqli_fetch_assoc($query_result)){
				$result[] = $query_row;
			}
			return $result;
		} 
		catch(Exception $ex)
		{
			echo $ex->getMessage();
		}
		return array();
	}
	public function getByID($id)
	{
		try
		{
			$query = "
				SELECT *
				FROM " . $this->taula_actual . "
			WHERE id = " . $id . ";
			";
			$query_result = $this->connection->query($query);
			$query_row = mysqli_fetch_assoc($query_result);
			return $query_row;

		}
		catch(Exception $ex)
		{
			echo $ex->getMessage();
		}
		return false;
	}
	public function getByColumn($var,$columna)
	{
		try
		{
			$query = "
				SELECT *
				FROM " . $this->taula_actual . " t 
			WHERE t." . $columna . " = " .$var ."
			";
			$query_result = $this->connection->query($query);
			$query_row = mysqli_fetch_assoc($query_result);
			return $query_row;

		}
		catch(Exception $ex)
		{
			echo $ex->getMessage();
		}
		return false;

	}
	public function deleteByID($id)
	{
		try
		{
			$query = "
				DELETE FROM " . $this->taula_actual . " WHERE id = " . intval($id) ."
			";
			$result = $this->connection->query($query);
			return $result;

		}
		catch(Exception $ex)
		{
			echo $ex->getMessage();
		}
		return false;
	}
	public function deleteByColumn($var,$columna)
	{
		try
		{
			$query = "
				DELETE * FROM " . $this->taula_actual . "
				WHERE " . $columna . " = " .$var ."
			";
			$query_result = $this->connection->query($query);
			return $query_result;

		}
		catch(Exception $ex)
		{
			echo $ex->getMessage();
		}
		return false;
	}
}