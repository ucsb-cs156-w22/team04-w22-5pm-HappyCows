import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function EditCommonsForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { defaultValues: props.initialCommon || {}, }
  );

  return (
    <Form onSubmit={handleSubmit(props.submitAction)}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Commons Name</Form.Label>
        <Form.Control
          data-testid="EditCommonsForm-name"
          id="name"
          type="text"
          isInvalid={!!errors.name}
          {...register("name", { required: "Commons name is required" })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="startingBalance">Starting Balance</Form.Label>
        <Form.Control
          data-testid="EditCommonsForm-startingBalance"
          id="startingBalance"
          type="number"
          step="0.01"
          isInvalid={!!errors.startingBalance}
          {...register("startingBalance", {
            valueAsNumber: true,
            required: "Starting Balance is required",
            min: { value: 0.01, message: "Starting Balance must be positive" },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.startingBalance?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="cowPrice">Cow Price</Form.Label>
        <Form.Control
          data-testid="EditCommonsForm-cowPrice"
          id="cowPrice"
          type="number"
          step="0.01"
          isInvalid={!!errors.cowPrice}
          {...register("cowPrice", {
            valueAsNumber: true,
            required: "Cow price is required",
            min: { value: 0.01, message: "Cow price must be positive" },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.cowPrice?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="milkPrice">Milk Price</Form.Label>
        <Form.Control
          data-testid="EditCommonsForm-milkPrice"
          id="milkPrice"
          type="number"
          step="0.01"
          isInvalid={!!errors.milkPrice}
          {...register("milkPrice", {
            valueAsNumber: true,
            required: "Milk price is required",
            min: { value: 0.01, message: "Milk price must be positive" },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.milkPrice?.message}
        </Form.Control.Feedback>
      </Form.Group>


      <Button
                type="submit"
                data-testid="EditCommonsForm-submit"
            >
                {props.buttonLabel}
            </Button>
    </Form>
  );
}
